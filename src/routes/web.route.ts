import { Router } from 'express';
import SignupController from '@controllers/auth/signup.controller';

const router = Router();

router.get('/signup/method', SignupController.method);

export default router;
