import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashed = await bcrypt.hash('TCCarlosIvankioTSI2025', 10);
  const admin = await prisma.usuario.create({
    data: {
      nome: 'Carlos Eduardo Ivankio Franco',
      email: 'duduif3107@gmail.com',
      senha: hashed,
      admin: true,
    }
  });
  console.log('Usuário admin criado:', admin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
