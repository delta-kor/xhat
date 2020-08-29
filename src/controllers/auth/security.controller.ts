import { NextFunction, Request, Response } from 'express';

export default class SecurityController {
  static ticket(req: Request, res: Response, next: NextFunction) {
    next();
  }
}
