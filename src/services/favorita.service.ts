import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const FavoritaService = {
  async favoritar(usuarioId: number, estabelecimentoId: number) {
    return prisma.favorita.create({
      data: { usuarioId, estabelecimentoId }
    });
  },

  async desfavoritar(usuarioId: number, estabelecimentoId: number) {
    return prisma.favorita.delete({
      where: {
        usuarioId_estabelecimentoId: { usuarioId, estabelecimentoId }
      }
    });
  },

  async listarFavoritos(usuarioId: number) {
    return prisma.favorita.findMany({
      where: { usuarioId },
      include: {
        estabelecimento: {
          include: {
            categorias: { include: { categoria: true } },
            fotos: true,
            telefones: true,
            emails: true,
            horario: true,
            usuario: true,
            tags: { include: { tag: true } }
          }
        }
      }
    });
  }
};
