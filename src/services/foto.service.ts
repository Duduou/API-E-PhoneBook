import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const FotoService = {
  async create(estabelecimentoId: number, url: string) {
    return prisma.foto.create({
    data: { url, estabelecimentoId }
  });
},

  async findByEstabelecimento(estabelecimentoId: number) {
    return prisma.foto.findMany({ where: { estabelecimentoId } });
  },

  async delete(id: number) {
    return prisma.foto.delete({ where: { id } });
  }
};
