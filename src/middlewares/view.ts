import { Application } from 'express';

export default class View {
  static mount(express: Application): Application {
    express.set('view engine', 'pug');
    express.set('view options', { pretty: true });
    return express;
  }
}
