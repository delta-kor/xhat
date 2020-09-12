import { Router } from 'express';
import SignupController from '@controllers/signup.controller';
import SecurityController from '@controllers/ticket.controller';

const router = Router();

router.get('/signup/method', SignupController.method);
router.get('/signup/email', SecurityController.ticket, SignupController.email);

export default router;
