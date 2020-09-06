import { Application, json, urlencoded } from 'express';
import Local from '@providers/local';
import flash from 'express-flash';
import session from 'express-session';
import compression from 'compression';
import mongo from 'connect-mongo';

const MongoStore = mongo(session);

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
    express.use(session({
      name: 'xht-s',
      resave: true,
      secret: Local.load().secret,
      saveUninitialized: true,
      cookie: {
        maxAge: Local.load().sessionAge,
      },
      store: new MongoStore({
        url: Local.load().dbPath,
        autoReconnect: true,
      }),
    }));
    express.use(flash());
    express.use(compression());
    express.disable('x-powered-by');
    return express;
  }
}
