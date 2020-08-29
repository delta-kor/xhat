import { Request, Response } from 'express';
import Render from '@interfaces/render';

export default class SignupController {
  static method(req: Request, res: Response): any {
    res.render('auth/signup/method');
    return true;
  }

  static email(req: Request, res: Response): any {
    const data: Render = {
      title: 'Sign Up',
      description: 'Sign Up With Email',
    };
    res.render('auth/signup/email', data);
    return true;
  }
}
