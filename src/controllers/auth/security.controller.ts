import { NextFunction, Request, Response } from 'express';
import Crypto from '@providers/crypto';

export default class SecurityController {
  static async ticket(req: Request, res: Response, next: NextFunction) {
    req.session.ticket = await Crypto.bookTicket();
    req.session.save((err) => { if (err) throw new Error(err); });
    next();
  }
}
