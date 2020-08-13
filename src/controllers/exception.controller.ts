import { NextFunction, Request, Response } from 'express';
import RenderData from '@interfaces/render.data';

export default class ExceptionController {
  static notFound(req: Request, res: Response): any {
    const data: RenderData = {
      title: 'Not found',
      description: '404 Not Found',
    };
    res.render('pages/error/not-found', data);
  }

  static error(err: Error, req: Request, res: Response, next: NextFunction): any {
    const data: RenderData = {
      title: 'Internal server error',
      description: 'Internal server error',
    };
    res.render('pages/error/internal-error', data);
    next();
  }
}
