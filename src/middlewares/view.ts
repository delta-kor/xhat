import { Application } from 'express';
import Engine from '@providers/engine';

export default class View {
  static mount(express: Application): Application {
    express.engine('html', Engine);
    express.set('view engine', 'html');
    express.set('views', 'dist/client');
    return express;
  }
}
