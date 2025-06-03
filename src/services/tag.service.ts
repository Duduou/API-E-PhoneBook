import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const TagService = {
  async create(data: any) {
    return prisma.tag.create({ data });
  },

  async findAll() {
    return prisma.tag.findMany({
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
    return prisma.tag.findUnique({
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
    return prisma.tag.update({
      where: { id },
      data
    });
  },

  async delete(id: number) {
    return prisma.tag.delete({ where: { id } });
  }
};
