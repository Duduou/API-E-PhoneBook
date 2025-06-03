import { Router } from 'express';
import { upload } from '../middlewares/upload.middleware';
import { FotoService } from '../services/foto.service';

const router = Router();

router.post(
  '/estabelecimentos/:id/fotos/upload',
  upload.single('arquivo'),
  async (req, res) => {
    try {
        const estabelecimentoId = parseInt(req.params.id);
        if(req.file) {
            const url = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
            const foto = await FotoService.create(estabelecimentoId, url);
            res.status(201).json(foto);
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
);

export default router;
