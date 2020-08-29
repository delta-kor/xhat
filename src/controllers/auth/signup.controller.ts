import { Request, Response } from 'express';
import Render from '@interfaces/render';
import { Ticket } from '@providers/crypto';
import Util from '../../util';

export default class SignupController {
  static method(req: Request, res: Response): any {
    res.render('auth/signup/method');
    return true;
  }

  static email(req: Request, res: Response): any {
    const ticket: Ticket = req.session.ticket as Ticket;
    const publicKey: string = Util.encode(ticket.public);
    const data: Render = {
      title: 'Sign Up',
      description: 'Sign Up With Email',
      publicKey,
    };
    res.render('auth/signup/email', data);
    return true;
  }
}
