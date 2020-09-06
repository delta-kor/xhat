import { Application, NextFunction } from 'express';
import { ExpressRequest, ExpressResponse } from '@interfaces/express';

export default class XHR {
  static mount(express: Application): Application {
    express.use((req: ExpressRequest, res: ExpressResponse, next: NextFunction) => {
      if (req.method !== 'GET' || req.xhr) {
        req.isXHR = true;
      }
      next();
    });
    return express;
  }
}
