import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { authConfig } from '../config/auth';

const prisma = new PrismaClient();

export const AuthService = {
  async register(data: { nome: string; email: string; senha: string }) {
    const hashed = await bcrypt.hash(data.senha, 10);
    const user = await prisma.usuario.create({
      data: { ...data, senha: hashed },
    });
    return { id: user.id, nome: user.nome, email: user.email };
  },

  async login(data: { email: string; senha: string }) {
    const user = await prisma.usuario.findUnique({ where: { email: data.email } });
    if (!user || !(await bcrypt.compare(data.senha, user.senha))) {
      throw new Error('Credenciais inválidas');
    }

    const token = jwt.sign(
      {sub: user.id, admin: user.admin},
      authConfig.secret,
      { expiresIn: "1d"}
    )

    return { token };
  }
};
