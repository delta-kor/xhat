import { Request, Response } from 'express';
import RenderData from '@interfaces/render.data';

export default class ExceptionController {
  static notFound(req: Request, res: Response): any {
    const data: RenderData = {
      title: 'Not found',
      description: '404 Not Found',
    };
    res.render('pages/error/not-found', data);
  }
}
