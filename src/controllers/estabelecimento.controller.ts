import { Request, Response } from 'express';
import { EstabelecimentoService } from '../services/estabelecimento.service';
import { estabelecimentoSchema } from '../schemas/estabelecimento.schema';
import dotenv from 'dotenv';

dotenv.config();
const HOST_PUBLIC = process.env.HOST_PUBLIC || 'localhost';
const PORT = process.env.PORT || 3000;


export const EstabelecimentoController = {
  async create(req: Request, res: Response) {
    try {
      const data = estabelecimentoSchema.parse(req.body);
      const userId = req.user?.id;
      if (userId) {
        const estabelecimento = await EstabelecimentoService.create(data, userId);
        res.status(201).json(estabelecimento);
      } else {
        res.status(401).json({ error: 'Usuário não autenticado.' });
      }
    } catch (error) {
        if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(400).json({ error: 'Ocorreu um erro desconhecido.' });
        }
      }
  },

  async index(req: Request, res: Response) {
    const all = await EstabelecimentoService.findAll();
    res.json(all);
  },

  async show(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const est = await EstabelecimentoService.findById(id);
      res.json(est);
    } catch (error) {
        if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(400).json({ error: 'Ocorreu um erro desconhecido.' });
        }
      }
  },

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const data = estabelecimentoSchema.parse(req.body);
      const est = await EstabelecimentoService.update(id, data);
      res.json(est);
    } catch (error) {
        if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(400).json({ error: 'Ocorreu um erro desconhecido.' });
        }
      }
  },

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await EstabelecimentoService.delete(id);
    res.status(204).send();
  },

  async uploadFotoPerfil(req: Request, res: Response) {
    try
    {
      if (req.file)
      {
        const estabelecimentoId = parseInt(req.params.id);
        const url = `${req.protocol}://${HOST_PUBLIC}:${PORT}/uploads/${req.file.filename}`;
        const updated = await EstabelecimentoService.updateFotoPerfil(estabelecimentoId, url);
        res.status(200).json(updated);
      }
      else res.status(400).json({ error: 'Arquivo não enviado' });
    }
    catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'Ocorreu um erro desconhecido.' });
      }
    }
  }
};
