import { Router } from 'express';
import SignupController from '@controllers/auth/signup.controller';
import SecurityController from '@controllers/auth/security.controller';

const router = Router();

router.get('/signup/method', SignupController.method);
router.get('/signup/email', SecurityController.ticket, SignupController.email);

export default router;
