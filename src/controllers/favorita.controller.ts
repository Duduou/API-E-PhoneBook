import { Request, Response } from 'express';
import { FavoritaService } from '../services/favorita.service';

export const FavoritaController = {
  async favoritar(req: Request, res: Response) {
    const usuarioId = req.user?.id;
    const estabelecimentoId = parseInt(req.params.id);
    if(usuarioId) {
        try {
            const favorito = await FavoritaService.favoritar(usuarioId, estabelecimentoId);
            res.status(201).json(favorito);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(400).json({ error: 'Ocorreu um erro desconhecido.' });
            }
        }
    }
    else res.status(401).json({ error: 'Usuário não autenticado' });
  },

  async desfavoritar(req: Request, res: Response) {
    const usuarioId = req.user?.id;
    const estabelecimentoId = parseInt(req.params.id);
    if(usuarioId) {
        try {
            await FavoritaService.desfavoritar(usuarioId, estabelecimentoId);
            res.status(204).send();
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(400).json({ error: 'Ocorreu um erro desconhecido.' });
            }
        }
    }
    else res.status(401).json({ error: 'Usuário não autenticado' });
  },

  async listar(req: Request, res: Response) {
    const usuarioId = req.user?.id;
    if (usuarioId) {
        try {
            const favoritos = await FavoritaService.listarFavoritos(usuarioId);
            res.json(favoritos.map(f => f.estabelecimento));
        }
        catch (error) {
            if (error instanceof Error) {
            res.status(400).json({ error: error.message });
            } else {
            res.status(400).json({ error: 'Ocorreu um erro desconhecido.' });
            }
        }
    }
    else res.status(401).json({ error: 'Usuário não autenticado' });
  }
};
