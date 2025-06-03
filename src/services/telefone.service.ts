import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const TelefoneService = {
  async create(estabelecimentoId: number, numero: string) {
    return prisma.telefone.create({ data: { numero, estabelecimentoId } });
  },

  async findByEstabelecimento(estabelecimentoId: number) {
    return prisma.telefone.findMany({ where: { estabelecimentoId } });
  },

  async delete(id: number) {
    return prisma.telefone.delete({ where: { id } });
  }
};
