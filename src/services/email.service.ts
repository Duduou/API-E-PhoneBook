import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const EmailService = {
  async create(estabelecimentoId: number, email: string) {
    return prisma.email.create({ data: { email, estabelecimentoId } });
  },

  async findByEstabelecimento(estabelecimentoId: number) {
    return prisma.email.findMany({ where: { estabelecimentoId } });
  },

  async delete(id: number) {
    return prisma.email.delete({ where: { id } });
  }
};
