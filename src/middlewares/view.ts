import { Application } from 'express';

export default class View {
  static mount(express: Application): Application {
    express.set('view engine', 'pug');
    express.set('views', 'views/pages');
    express.locals.pretty = true;
    return express;
  }
}
