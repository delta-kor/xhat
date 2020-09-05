import {
  Application, NextFunction, Response,
} from 'express';
import { ExpressRequest } from '@interfaces/express';

export default class XHR {
  static mount(express: Application): Application {
    express.use((req: ExpressRequest, res: Response, next: NextFunction) => {
      if (req.method !== 'GET' || req.xhr) {
        req.isXHR = true;
      }
      next();
    });
    return express;
  }
}
