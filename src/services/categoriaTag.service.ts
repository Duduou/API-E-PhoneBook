import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const CategoriaTagService = {
  async associar(categoriaId: number, tagIds: number[]) {
    const data = tagIds.map(tagId => ({
      categoriaId,
      tagId
    }));
    return prisma.categoriaTag.createMany({ data });
  },

  async desassociar(categoriaId: number, tagId: number) {
    return prisma.categoriaTag.delete({
      where: { categoriaId_tagId: { categoriaId, tagId } }
    });
  },

  async listarTags(categoriaId: number) {
    return prisma.categoriaTag.findMany({
      where: { categoriaId },
      include: { tag: true }
    });
  }
};
