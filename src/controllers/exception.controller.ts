import { Request, Response } from 'express';

export default class ExceptionController {
  static notFound(req: Request, res: Response): any {
    res.render('pages/error/not-found');
  }
}
