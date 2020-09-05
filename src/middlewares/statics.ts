import path from 'path';
import { Application, static as Static } from 'express';
import Local from '@providers/local';

export default class Statics {
  static mount(express: Application): Application {
    const publicPath = path.join(__dirname, '../../dist/client');
    express.use(Static(publicPath, {
      maxAge: Local.load().cache,
    }));
    return express;
  }
}
