import { Application } from 'express';
import Local from '@providers/local';
import Http from '@middlewares/http';
import Statics from '@middlewares/statics';
import Cors from './cors';
import View from './view';

export default class Kernel {
  static mount(express: Application): Application {
    if (Local.load().corsEnabled) {
      Cors.mount(express);
    }
    Http.mount(express);
    View.mount(express);
    Statics.mount(express);
    return express;
  }
}
