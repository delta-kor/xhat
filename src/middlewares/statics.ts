import path from 'path';
import { Application, static as Static } from 'express';

export default class Statics {
  static mount(express: Application): Application {
    const publicPath = path.join(__dirname, '../../dist/public');
    express.use(Static(publicPath, {
      maxAge: 432000000,
    }));
    return express;
  }
}
