import { Application } from 'express';
import Local from '@providers/local';
import Cors from './cors';
import View from './view';

export default class Kernel {
  static init(express: Application): Application {
    if (Local.load().corsEnabled) {
      Cors.mount(express);
    }
    View.mount(express);
    return express;
  }
}
