import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const BuscaService = {
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
