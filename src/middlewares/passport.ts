import { Application } from 'express';
import passport from 'passport';

export default class Passport {
  static mount(express: Application): Application {
    express.use(passport.initialize());
    express.use(passport.session());
    return express;
  }
}
