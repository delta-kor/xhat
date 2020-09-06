import { Application, NextFunction } from 'express';
import { ExpressRequest, ExpressResponse } from '@interfaces/express';

export default class Session {
  static mount(express: Application): Application {
    express.use((req: ExpressRequest, res: ExpressResponse, next: NextFunction) => {
      req.ticket = req.session.ticket;
      next();
    });
    return express;
  }
}
