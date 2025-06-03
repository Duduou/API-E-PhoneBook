import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { registerSchema, loginSchema } from '../schemas/auth.schema';

export const AuthController = {
  async register(req: Request, res: Response) {
    try {
      const data = registerSchema.parse(req.body);
      const user = await AuthService.register(data);
      res.status(201).json(user);
    } catch (error) {
        if (error instanceof Error) {
          res.status(401).json({ error: error.message });
        } else {
          res.status(401).json({ error: 'Erro desconhecido ao tentar fazer login.' });
        }
      }
  },

  async login(req: Request, res: Response) {
    try {
      const data = loginSchema.parse(req.body);
      const result = await AuthService.login(data);
      res.json(result);
    } catch (error) {
        if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(400).json({ error: 'Ocorreu um erro desconhecido.' });
        }
      }
  }
};
