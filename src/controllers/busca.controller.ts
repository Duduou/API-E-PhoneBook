import { Request, Response } from 'express';
import { BuscaService } from '../services/busca.service';

export const BuscaController = {
  async porNome(req: Request, res: Response) {
    try{
        const nome = req.query.nome as string;
        const resultados = await BuscaService.porNome(nome);
        res.json(resultados);
    }
    catch (error) {
        if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(400).json({ error: 'Ocorreu um erro desconhecido.' });
        }
      }
  },

  async porCategoria(req: Request, res: Response) {
    const categoriaId = parseInt(req.params.id);
    const resultados = await BuscaService.porCategoria(categoriaId);
    res.json(resultados);
  },

  async porTag(req: Request, res: Response) {
    const tagId = parseInt(req.params.id);
    const resultados = await BuscaService.porTag(tagId);
    res.json(resultados);
  }
};
