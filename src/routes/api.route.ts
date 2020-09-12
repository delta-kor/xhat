import { Router } from 'express';
import CryptoController from '@controllers/crypto.controller';
import AuthController from '@controllers/auth.controller';

const router = Router();

router.post('/auth/signup', CryptoController.resolve, AuthController.signup);

export default router;
