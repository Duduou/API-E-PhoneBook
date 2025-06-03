import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const EstabelecimentoService = {
  async create(data: any) {
    return prisma.estabelecimento.create({ data });
  },

  async findAll() {
    return prisma.estabelecimento.findMany({
      include: {
        fotos: true,
        telefones: true,
        emails: true,
        categorias: {
          include: { categoria: true }
        },
        tags: {
          include: { tag: true }
        }
      }
    });
  },

  async findById(id: number) {
    return prisma.estabelecimento.findUnique({
      where: { id },
      include: {
        fotos: true,
        telefones: true,
        emails: true,
        categorias: { include: { categoria: true } },
        tags: { include: { tag: true } }
      }
    });
  },

  async update(id: number, data: any) {
    return prisma.estabelecimento.update({
      where: { id },
      data
    });
  },

  async delete(id: number) {
    return prisma.estabelecimento.delete({ where: { id } });
  },

  async updateFotoPerfil(id: number, url: string) {
    return prisma.estabelecimento.update({
      where: { id },
      data: { fotoPerfil: url }
    });
  }
};
