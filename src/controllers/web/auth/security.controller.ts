import { NextFunction } from 'express';
import Crypto from '@providers/crypto';
import { ExpressRequest, ExpressResponse } from '@interfaces/express';

export default class SecurityController {
  static async ticket(req: ExpressRequest, res: ExpressResponse, next: NextFunction) {
    req.session.ticket = await Crypto.bookTicket();
    req.session.save((err) => { if (err) throw new Error(err); });
    req.ticket = req.session.ticket;
    next();
  }
}
