import { Router } from 'express';
import { EstabelecimentoController } from '../controllers/estabelecimento.controller';
import { upload } from '../middlewares/upload.middleware';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', EstabelecimentoController.index);
router.get('/:id', EstabelecimentoController.show);
router.post('/', authenticate, EstabelecimentoController.create);
router.put('/:id', authenticate, EstabelecimentoController.update);
router.delete('/:id', authenticate, EstabelecimentoController.delete);
router.post('/:id/foto-perfil', authenticate, upload.single('arquivo'), EstabelecimentoController.uploadFotoPerfil);

export default router;
