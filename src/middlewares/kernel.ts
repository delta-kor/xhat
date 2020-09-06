import { Application } from 'express';
import Local from '@providers/local';
import Http from './http';
import Statics from './statics';
import XHR from './xhr';
import Session from './session';
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
    XHR.mount(express);
    Session.mount(express);
    return express;
  }
}
