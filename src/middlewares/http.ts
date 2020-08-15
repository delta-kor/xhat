import { Application, json, urlencoded } from 'express';
import Local from '@providers/local';
import flash from 'express-flash';
import session from 'express-session';
import compression from 'compression';

export default class Http {
  static mount(express: Application): Application {
    express.use(json({
      limit: Local.load().maxUpload,
    }));
    express.use(urlencoded({
      limit: Local.load().maxUpload,
      parameterLimit: Local.load().maxParam,
      extended: true,
    }));
    express.use(flash());
    express.use(session({
      resave: true,
      secret: Local.load().secret,
      saveUninitialized: true,
      cookie: {
        maxAge: 432000000,
      },
    }));
    express.use(compression());
    express.disable('x-powered-by');
    return express;
  }
}
