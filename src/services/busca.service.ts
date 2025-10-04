import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const BuscaService = {
  async buscar(term: string) {
    term = term.toLowerCase();

    const resultados: { estabelecimento: any; prioridade: number }[] = [];

    const porNome = await prisma.estabelecimento.findMany({
      where: { nome: { contains: term } },
      include: {
        categorias: { include: { categoria: true } },
        tags: { include: { tag: true } }
      }
    });
    porNome.forEach(e => resultados.push({ estabelecimento: e, prioridade: 1 }));

    const categorias = await prisma.categoria.findMany({
      where: { nome: { contains: term } }
    });
    if (categorias.length > 0) {
      const categoriaIds = categorias.map(c => c.id);
      const porCategoria = await prisma.estabelecimento.findMany({
        where: { categorias: { some: { categoriaId: { in: categoriaIds } } } },
        include: {
          categorias: { include: { categoria: true } },
          tags: { include: { tag: true } }
        }
      });
      porCategoria.forEach(e => resultados.push({ estabelecimento: e, prioridade: 2 }));
    }

    const tags = await prisma.tag.findMany({
      where: { nome: { contains: term } }
    });
    if (tags.length > 0) {
      const tagIds = tags.map(t => t.id);
      const porTag = await prisma.estabelecimento.findMany({
        where: { tags: { some: { tagId: { in: tagIds } } } },
        include: {
          categorias: { include: { categoria: true } },
          tags: { include: { tag: true } }
        }
      });
      porTag.forEach(e => resultados.push({ estabelecimento: e, prioridade: 3 }));
    }

    const seen = new Set<number>();
    const finais = resultados
      .filter(r => {
        if (seen.has(r.estabelecimento.id)) return false;
        seen.add(r.estabelecimento.id);
        return true;
      })
      .sort((a, b) => a.prioridade - b.prioridade)
      .map(r => r.estabelecimento);

    return finais;
  },

  async porNome(nome: string) {
    return prisma.estabelecimento.findMany({
      where: {
        nome: {
          contains: nome.toLowerCase()
        }
      },
      include: {
        categorias: { include: { categoria: true } },
        tags: { include: { tag: true } }
      }
    });
  },

  async porCategoria(categoriaId: number) {
    return prisma.estabelecimento.findMany({
      where: {
        categorias: {
          some: { categoriaId }
        }
      },
      include: {
        categorias: { include: { categoria: true } },
        tags: { include: { tag: true } }
      }
    });
  },

  async porTag(tagId: number) {
    return prisma.estabelecimento.findMany({
      where: {
        tags: {
          some: { tagId }
        }
      },
      include: {
        categorias: { include: { categoria: true } },
        tags: { include: { tag: true } }
      }
    });
  }
};
