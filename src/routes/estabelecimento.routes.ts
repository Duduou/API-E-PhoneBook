import { Router } from 'express';
import { EstabelecimentoController } from '../controllers/estabelecimento.controller';
import { upload } from '../middlewares/upload.middleware';

const router = Router();

router.get('/', EstabelecimentoController.index);
router.get('/:id', EstabelecimentoController.show);
router.post('/', EstabelecimentoController.create);
router.put('/:id', EstabelecimentoController.update);
router.delete('/:id', EstabelecimentoController.delete);
router.post('/:id/foto-perfil', upload.single('arquivo'), EstabelecimentoController.uploadFotoPerfil);

export default router;
