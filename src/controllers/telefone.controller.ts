import { Request, Response } from 'express';
import { TelefoneService } from '../services/telefone.service';
import { telefoneSchema } from '../schemas/telefone.schema';

export const TelefoneController = {
  async create(req: Request, res: Response) {
    try {
      const { numero } = telefoneSchema.parse(req.body);
      const estabelecimentoId = parseInt(req.params.id);
      const foto = await TelefoneService.create(estabelecimentoId, numero);
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
    const fotos = await TelefoneService.findByEstabelecimento(estabelecimentoId);
    res.json(fotos);
  },

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await TelefoneService.delete(id);
    res.status(204).send();
  }
};
