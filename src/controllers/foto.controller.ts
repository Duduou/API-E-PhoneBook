import { Request, Response } from 'express';
import { FotoService } from '../services/foto.service';
import { fotoSchema } from '../schemas/foto.schema';

export const FotoController = {
  async create(req: Request, res: Response) {
    try {
      const { url } = fotoSchema.parse(req.body);
      const estabelecimentoId = parseInt(req.params.id);
      const foto = await FotoService.create(estabelecimentoId, url);
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
    const fotos = await FotoService.findByEstabelecimento(estabelecimentoId);
    res.json(fotos);
  },

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await FotoService.delete(id);
    res.status(204).send();
  }
};
