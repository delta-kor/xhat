import { Application } from 'express';
import ApiRouter from '@routes/api.route';
import WebRouter from '@routes/web.route';
import Local from './local';

export default class Route {
  static mountApi(express: Application): Application {
    const { apiPath } = Local.load();
    return express.use(apiPath, ApiRouter);
  }

  static mountWeb(express: Application): Application {
    return express.use(WebRouter);
  }
}
