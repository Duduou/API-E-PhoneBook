import { Router } from 'express';
import { AssociacaoController } from '../controllers/associacao.controller';

const router = Router();


// Categorias
router.post('/estabelecimentos/:id/categorias', AssociacaoController.associarCategorias);
router.delete('/estabelecimentos/:id/categorias/:categoriaId', AssociacaoController.desassociarCategoria);

// Tags
router.post('/estabelecimentos/:id/tags', AssociacaoController.associarTags);
router.delete('/estabelecimentos/:id/tags/:tagId', AssociacaoController.desassociarTag);

export default router;
