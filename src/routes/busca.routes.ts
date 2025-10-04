import { Router } from 'express';
import { BuscaController } from '../controllers/busca.controller';

const router = Router();

router.get('/buscar', BuscaController.buscar);

router.get('/buscarNome', BuscaController.porNome);
router.get('/buscar/categorias/:id', BuscaController.porCategoria);
router.get('/buscar/tags/:id', BuscaController.porTag);

export default router;