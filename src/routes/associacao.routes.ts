import { Router } from 'express';
import { AssociacaoController } from '../controllers/associacao.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();


// Categorias
router.post('/estabelecimentos/:id/categorias', authenticate, AssociacaoController.associarCategorias);
router.delete('/estabelecimentos/:id/categorias/:categoriaId', authenticate, AssociacaoController.desassociarCategoria);

// Tags
router.post('/estabelecimentos/:id/tags', authenticate, AssociacaoController.associarTags);
router.delete('/estabelecimentos/:id/tags/:tagId', authenticate, AssociacaoController.desassociarTag);

export default router;
