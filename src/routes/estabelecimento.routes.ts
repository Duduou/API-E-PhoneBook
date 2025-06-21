import { Router } from 'express';
import { EstabelecimentoController } from '../controllers/estabelecimento.controller';
import { upload } from '../middlewares/upload.middleware';
import { authenticate } from '../middlewares/auth.middleware';
import { isAdmin } from '../middlewares/isAdmin.middleware';

const router = Router();

router.get('/', EstabelecimentoController.index);
router.get('/:id', EstabelecimentoController.show);
router.post('/', authenticate, isAdmin, EstabelecimentoController.create);
router.put('/:id', authenticate, isAdmin, EstabelecimentoController.update);
router.delete('/:id', authenticate, isAdmin, EstabelecimentoController.delete);
router.post('/:id/foto-perfil', authenticate, isAdmin, upload.single('arquivo'), EstabelecimentoController.uploadFotoPerfil);

export default router;
