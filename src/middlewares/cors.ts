import cors, { CorsOptions } from 'cors';
import { Application } from 'express';
import Local from '@providers/local';

export default class Cors {
  static mount(express: Application): Application {
    const options: CorsOptions = {
      origin: Local.load().url,
      optionsSuccessStatus: 200,
    };
    express.use(cors(options));
    return express;
  }
}
