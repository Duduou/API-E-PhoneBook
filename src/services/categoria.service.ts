import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const CategoriaService = {
  async create(data: any) {
    return prisma.categoria.create({ data });
  },

  async findAll() {
    return prisma.categoria.findMany({
      include: {
        estabelecimentos: {
          include: {
            estabelecimento: true
          }
        }
      }
    });
  },

  async findById(id: number) {
    return prisma.categoria.findUnique({
      where: { id },
      include: {
        estabelecimentos: {
          include: {
            estabelecimento: true
          }
        }
      }
    });
  },

  async update(id: number, data: any) {
    return prisma.categoria.update({
      where: { id },
      data
    });
  },

  async delete(id: number) {
    return prisma.categoria.delete({ where: { id } });
  }
};
