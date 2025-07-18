import { Request, Response } from 'express';
import { CategoriaService } from '../services/categoria.service';
import { categoriaSchema } from '../schemas/categoria.schema';
import dotenv from 'dotenv';

dotenv.config();
const HOST_PUBLIC = process.env.HOST_PUBLIC || 'localhost';
const PORT = process.env.PORT || 3000;

export const CategoriaController = {
  async index(req: Request, res: Response) {
    const categorias = await CategoriaService.findAll();
    res.json(categorias);
  },

  async show(req: Request, res: Response) {
    try
    {
        const id = parseInt(req.params.id);
        const categoria = await CategoriaService.findById(id);
        res.json(categoria);
    } catch (error) {
        if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(400).json({ error: 'Ocorreu um erro desconhecido.' });
        }
      }
  },

  async create(req: Request, res: Response) {
    try {
      const data = categoriaSchema.parse(req.body);
      const categoria = await CategoriaService.create(data);
      res.status(201).json(categoria);
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
      const data = categoriaSchema.parse(req.body);
      const categoria = await CategoriaService.update(id, data);
      res.json(categoria);
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
    await CategoriaService.delete(id);
    res.status(204).send();
  },

  async uploadImagem(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      if (req.file) {
        const imagem = `${req.protocol}://${HOST_PUBLIC}:${PORT}/uploads/${req.file.filename}`;
        const categoria = await CategoriaService.updateImagem(id, imagem);
        res.status(200).json(categoria);
      }
      else res.status(400).json({ error: 'Arquivo não enviado' });
    } catch (error) {
      res.status(400).json({ error: 'Erro ao atualizar imagem da categoria.' });
    }
  }
};
