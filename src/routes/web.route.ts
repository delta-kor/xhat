import { Router } from 'express';
import SignupController from '@controllers/web/auth/signup.controller';
import SecurityController from '@controllers/web/auth/security.controller';

const router = Router();

router.get('/signup/method', SignupController.method);
router.get('/signup/email', SecurityController.ticket, SignupController.email);

export default router;
