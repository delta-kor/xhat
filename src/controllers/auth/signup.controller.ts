import { Request, Response } from 'express';
import RenderData from '@interfaces/render.data';

export default class SignupController {
  static method(req: Request, res: Response): any {
    res.render('auth/signup/method');
    return true;
  }

  static email(req: Request, res: Response): any {
    const data: RenderData = {
      title: 'Sign Up',
      description: 'Sign Up With Email',
    };
    res.render('auth/signup/email', data);
    return true;
  }
}
