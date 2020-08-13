import { Router } from 'express';
import ExceptionController from '@controllers/exception.controller';

const router = Router();

router.get('*', ExceptionController.notFound);

export default router;
