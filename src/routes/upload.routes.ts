import { Router } from 'express';
import { upload } from '../middlewares/upload.middleware';
import { UploadController } from '../controllers/upload.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/upload', authenticate,upload.single('arquivo'), UploadController.uploadSingle);

export default router;
