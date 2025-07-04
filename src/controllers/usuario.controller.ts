import { Request, Response } from 'express';
import { UsuarioService } from '../services/usuario.service';
import dotenv from 'dotenv';

dotenv.config();
const HOST_PUBLIC = process.env.HOST_PUBLIC || 'localhost';
const PORT = process.env.PORT || 3000;


export const UsuarioController = {
  async uploadFoto(req: Request, res: Response) {
    try
    {
        if (req.file) {
            const userId = req.user?.id;
            console.log(req.user?.id);
            if (userId) {
                const url = `${req.protocol}://${HOST_PUBLIC}:${PORT}/uploads/${req.file.filename}`;
                const updated = await UsuarioService.updateFoto(userId, url);
                res.status(200).json(updated);
            }
            else res.status(401).json({ error: 'Usuário não autenticado' });
        }
        else res.status(400).json({ error: 'Arquivo não enviado.' });
    }
    catch (error) {
        if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(400).json({ error: 'Ocorreu um erro desconhecido.' });
        }
    }
  },

  async getFoto(req: Request, res: Response) {
    try {
      const userId = req.user?.id;
      if (userId) {
        const usuario = await UsuarioService.buscarPorId(userId);
        if (usuario && usuario.foto) {
          res.status(200).json({ foto: usuario.foto });
        } else {
          res.status(404).json({ error: 'Usuário não encontrado ou sem foto.' });
        }
      } else {
        res.status(401).json({ error: 'Usuário não autenticado.' });
      }
    }
    catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'Ocorreu um erro desconhecido.' });
      }
    }
  },

  async getNome(req: Request, res: Response) {
    try {
      const userId = req.user?.id;
      if (userId) {
        const usuario = await UsuarioService.buscarPorId(userId);
        if (usuario) {
          res.status(200).json({ nome: usuario.nome });
        } else {
          res.status(404).json({ error: 'Usuário não encontrado.' });
        }
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
  }
};