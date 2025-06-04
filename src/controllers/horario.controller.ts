import { Request, Response } from 'express';
import { HorarioService } from '../services/horario.service';
import { horarioSchema } from '../schemas/horario.schema';

export const HorarioController = {
  async create(req: Request, res: Response) {
    const estabelecimentoId = parseInt(req.params.id);
    const data = horarioSchema.parse(req.body);
    const horario = await HorarioService.criar(estabelecimentoId, data);
    res.status(201).json(horario);
  },

  async get(req: Request, res: Response) {
    const estabelecimentoId = parseInt(req.params.id);
    const horario = await HorarioService.obterPorEstabelecimento(estabelecimentoId);
    if(horario) {
        res.json(horario);
    }
    else res.status(404).json({ error: 'Horário não encontrado' });
  },

  async update(req: Request, res: Response) {
    const estabelecimentoId = parseInt(req.params.id);
    const data = horarioSchema.parse(req.body);
    const horario = await HorarioService.atualizar(estabelecimentoId, data);
    res.json(horario);
  },

  async delete(req: Request, res: Response) {
    const estabelecimentoId = parseInt(req.params.id);
    await HorarioService.deletar(estabelecimentoId);
    res.status(204).send();
  }
};
