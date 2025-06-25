import { Request, Response } from 'express';
import { CategoriaTagService } from '../services/categoriaTag.service';

export const CategoriaTagController = {
  async associar(req: Request, res: Response) {
    const categoriaId = parseInt(req.params.id);
    const { tagIds } = req.body;

    await CategoriaTagService.associar(categoriaId, tagIds);
    res.status(204).send();
  },

  async desassociar(req: Request, res: Response) {
    const categoriaId = parseInt(req.params.id);
    const tagId = parseInt(req.params.tagId);

    await CategoriaTagService.desassociar(categoriaId, tagId);
    res.status(204).send();
  },

  async listar(req: Request, res: Response) {
    const categoriaId = parseInt(req.params.id);
    const tags = await CategoriaTagService.listarTags(categoriaId);
    res.json(tags.map(ct => ct.tag));
  }
};
