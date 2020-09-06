import { Router } from 'express';
import CryptoController from '@controllers/api/crypto.controller';
import AuthController from '@controllers/api/auth.controller';

const router = Router();

router.post('/auth/signup', CryptoController.resolve, AuthController.signup);

export default router;
