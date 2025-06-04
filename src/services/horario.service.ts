import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const HorarioService = {
  async criar(estabelecimentoId: number, data: any) {
    return prisma.horario.create({
      data: {
        ...data,
        estabelecimentoId
      }
    });
  },

  async obterPorEstabelecimento(estabelecimentoId: number) {
    return prisma.horario.findUnique({
      where: { estabelecimentoId }
    });
  },

  async atualizar(estabelecimentoId: number, data: any) {
    return prisma.horario.update({
      where: { estabelecimentoId },
      data
    });
  },

  async deletar(estabelecimentoId: number) {
    return prisma.horario.delete({
      where: { estabelecimentoId }
    });
  }
};
