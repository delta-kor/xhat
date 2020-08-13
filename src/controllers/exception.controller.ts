import { NextFunction, Request, Response } from 'express';
import RenderData from '@interfaces/render.data';
import { Status } from '@interfaces/response';
import Reply from '@providers/reply';

export default class ExceptionController {
  static notFound(req: Request, res: Response): any {
    res.status(404);
    if (req.xhr) {
      Reply.reject(res, Status.NOT_FOUND, 'page not found');
      return true;
    }
    const data: RenderData = {
      title: 'Not found',
      description: '404 Not Found',
    };
    res.render('pages/error/not-found', data);
    return true;
  }

  static error(err: Error, req: Request, res: Response, next: NextFunction): any {
    console.error(err);
    res.status(500);
    if (req.xhr) {
      Reply.reject(res, Status.INTERNAL_ERROR, 'internal error');
      return true;
    }
    const data: RenderData = {
      title: 'Internal server error',
      description: 'Internal server error',
    };
    res.render('pages/error/internal-error', data);
    next();
    return true;
  }
}
