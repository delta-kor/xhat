import { Request, Response } from 'express';

export default class SignupController {
  static method(req: Request, res: Response): any {
    res.render('pages/auth/signup/method');
    return true;
  }
}
