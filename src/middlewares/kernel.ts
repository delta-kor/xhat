import { Application } from 'express';
import Local from '@providers/local';
import Database from './database';
import Passport from './passport';
import Http from './http';
import Statics from './statics';
import XHR from './xhr';
import Session from './session';
import Cors from './cors';
import View from './view';

export default class Kernel {
  static async mount(express: Application): Promise<Application> {
    if (Local.load().corsEnabled) {
      Cors.mount(express);
    }
    Passport.mount(express);
    Http.mount(express);
    View.mount(express);
    Statics.mount(express);
    XHR.mount(express);
    Session.mount(express);
    await Database.mount();
    console.log('Database connected');
    return express;
  }
}
