import { Application } from 'express';
import ApiRouter from '@routes/api.route';
import WebRouter from '@routes/web.route';
import ExceptionController from '@controllers/exception.controller';
import Local from './local';

export default class Route {
  static mount(express: Application): Application {
    this.mountApi(express);
    this.mountWeb(express);
    express.use(ExceptionController.notFound);
    express.use(ExceptionController.error);
    return express;
  }

  private static mountApi(express: Application): Application {
    const { apiPath } = Local.load();
    express.use(apiPath, ApiRouter);
    return express;
  }

  private static mountWeb(express: Application): Application {
    express.use(WebRouter);
    return express;
  }
}
