import { NextFunction, Response } from 'express';
import Crypto from '@providers/crypto';
import { ExpressRequest } from '@interfaces/express';

export default class SecurityController {
  static async ticket(req: ExpressRequest, res: Response, next: NextFunction) {
    req.session.ticket = await Crypto.bookTicket();
    req.session.save((err) => { if (err) throw new Error(err); });
    next();
  }
}
