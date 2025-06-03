import { Request, Response } from 'express';
import { UsuarioService } from '../services/usuario.service';

export const UsuarioController = {
  async uploadFoto(req: Request, res: Response) {
    try
    {
        if (req.file) {
            const userId = req.user?.id;
            console.log(req.user?.id);
            if (userId) {
                const url = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
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
  }
};