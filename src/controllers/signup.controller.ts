import Render from '@interfaces/render';
import { Ticket } from '@providers/crypto';
import { ExpressRequest, ExpressResponse } from '@interfaces/express';
import Util from '../util';

export default class SignupController {
  static method(req: ExpressRequest, res: ExpressResponse): any {
    res.render('auth/signup/method');
    return true;
  }

  static email(req: ExpressRequest, res: ExpressResponse): any {
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
