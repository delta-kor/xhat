import { NextFunction } from 'express';
import Render from '@interfaces/render';
import { Status } from '@interfaces/response';
import Output from '@providers/output';
import { ExpressRequest, ExpressResponse } from '@interfaces/express';

export default class ExceptionController {
  static notFound(req: ExpressRequest, res: ExpressResponse): any {
    res.status(404);
    if (req.isXHR) {
      Output.reject(res, Status.NOT_FOUND, 'page not found');
      return true;
    }
    const data: Render = {
      title: 'Not found',
      description: '404 Not Found',
    };
    res.render('error/not-found', data);
    return true;
  }

  static error(err: Error, req: ExpressRequest, res: ExpressResponse, next: NextFunction): any {
    console.error(err);
    res.status(500);
    if (req.xhr) {
      Output.reject(res, Status.INTERNAL_ERROR, 'internal error');
      return true;
    }
    const data: Render = {
      title: 'Internal server error',
      description: 'Internal server error',
    };
    res.render('error/internal-error', data);
    next();
    return true;
  }
}
