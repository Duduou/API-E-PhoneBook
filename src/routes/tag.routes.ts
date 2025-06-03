import { Router } from 'express';
import { TagController } from '../controllers/tag.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { isAdmin } from '../middlewares/isAdmin.middleware';

const router = Router();

router.get('/', TagController.index);
router.get('/:id', TagController.show);
router.post('/',authenticate, isAdmin, TagController.create);
router.put('/:id',authenticate, isAdmin,  TagController.update);
router.delete('/:id',authenticate, isAdmin,  TagController.delete);

export default router;
