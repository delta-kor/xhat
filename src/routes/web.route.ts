import { Router } from 'express';
import SignupController from '@controllers/auth/signup.controller';

const router = Router();

router.get('/signup/method', SignupController.method);
router.get('/signup/email', SignupController.email);

export default router;
