import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const AssociacaoService = {
  async associarCategorias(estabelecimentoId: number, categoriaIds: number[]) {
    const data = categoriaIds.map(categoriaId => ({
      estabelecimentoId,
      categoriaId
    }));
    return prisma.categoriaEstabelecimento.createMany({ data, skipDuplicates: true });
  },

  async desassociarCategoria(estabelecimentoId: number, categoriaId: number) {
    return prisma.categoriaEstabelecimento.delete({
      where: { estabelecimentoId_categoriaId: { estabelecimentoId, categoriaId } }
    });
  },

  async associarTags(estabelecimentoId: number, tagIds: number[]) {
    const data = tagIds.map(tagId => ({
      estabelecimentoId,
      tagId
    }));
    return prisma.tagEstabelecimento.createMany({ data, skipDuplicates: true });
  },


  async desassociarTag(estabelecimentoId: number, tagId: number) {
    return prisma.tagEstabelecimento.delete({
      where: { estabelecimentoId_tagId: { estabelecimentoId, tagId } }
    });
  }
};
