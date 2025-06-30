import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const UsuarioService = {
  async updateFoto(id: number, url: string) {
    return prisma.usuario.update({
      where: { id },
      data: { foto: url }
    });
  },

  async buscarPorId(id: number) {
    return prisma.usuario.findUnique({ where: { id } });
  }
};
