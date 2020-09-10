import { Application, NextFunction } from 'express';
import { ExpressRequest, ExpressResponse } from '@interfaces/express';

export default class XHR {
  static mount(express: Application): Application {
    express.use((req: ExpressRequest, res: ExpressResponse, next: NextFunction) => {
      req.isXHR = (req.method !== 'GET' || req.xhr);
      next();
    });
    return express;
  }
}
