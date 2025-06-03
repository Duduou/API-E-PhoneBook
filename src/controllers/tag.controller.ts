import { Request, Response } from 'express';
import { TagService } from '../services/tag.service';
import { tagSchema } from '../schemas/tag.schema';

export const TagController = {
  async index(req: Request, res: Response) {
    const tags = await TagService.findAll();
    res.json(tags);
  },

  async show(req: Request, res: Response) {
    try
    {
        const id = parseInt(req.params.id);
        const tag = await TagService.findById(id);
        res.json(tag);
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
      const data = tagSchema.parse(req.body);
      const tag = await TagService.create(data);
      res.status(201).json(tag);
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
      const data = tagSchema.parse(req.body);
      const tag = await TagService.update(id, data);
      res.json(tag);
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
    await TagService.delete(id);
    res.status(204).send();
  }
};
