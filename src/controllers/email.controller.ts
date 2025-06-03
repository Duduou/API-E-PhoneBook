import { Request, Response } from 'express';
import { EmailService } from '../services/email.service';
import { emailSchema } from '../schemas/email.schema';

export const EmailController = {
  async create(req: Request, res: Response) {
    try {
      const { email } = emailSchema.parse(req.body);
      const estabelecimentoId = parseInt(req.params.id);
      const foto = await EmailService.create(estabelecimentoId, email);
      res.status(201).json(foto);
    } catch (error) {
        if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(400).json({ error: 'Ocorreu um erro desconhecido.' });
        }
      }
  },

  async index(req: Request, res: Response) {
    const estabelecimentoId = parseInt(req.params.id);
    const fotos = await EmailService.findByEstabelecimento(estabelecimentoId);
    res.json(fotos);
  },

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await EmailService.delete(id);
    res.status(204).send();
  }
};
