import { Request, Response } from 'express';
import { AssociacaoService } from '../services/associacao.service';

export const AssociacaoController = {
  async associarCategorias(req: Request, res: Response) {
    const estabelecimentoId = parseInt(req.params.id);
    const { categoriaIds } = req.body;
    await AssociacaoService.associarCategorias(estabelecimentoId, categoriaIds);
    res.status(204).send();
  },

  async desassociarCategoria(req: Request, res: Response) {
    const estabelecimentoId = parseInt(req.params.id);
    const categoriaId = parseInt(req.params.categoriaId);
    await AssociacaoService.desassociarCategoria(estabelecimentoId, categoriaId);
    res.status(204).send();
  },

  async associarTags(req: Request, res: Response) {
    const estabelecimentoId = parseInt(req.params.id);
    const { tagIds } = req.body;
    await AssociacaoService.associarTags(estabelecimentoId, tagIds);
    res.status(204).send();
  },

  async desassociarTag(req: Request, res: Response) {
    const estabelecimentoId = parseInt(req.params.id);
    const tagId = parseInt(req.params.tagId);
    await AssociacaoService.desassociarTag(estabelecimentoId, tagId);
    res.status(204).send();
  }
};
