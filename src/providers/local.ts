import dotenv from 'dotenv';
import path from 'path';
import { LocalValue } from '@interfaces/local-value';

export default class Local {
  static load(): LocalValue {
    dotenv.config({ path: path.join(__dirname, '../../.env') });

    const url = process.env.URL || '127.0.0.1';
    const port = parseInt(process.env.PORT, 10) || 3000;
    const apiPath = process.env.API_PATH || 'api';
    const corsEnabled = process.env.CORS_ENABLED === 'true';
    const maxUpload = process.env.MAX_UPLOAD || '10mb';
    const maxParam = parseInt(process.env.MAX_PARAM, 10) || 100;
    const secret = process.env.APP_SECRET || 'abcdefghijklmnopqrstuvwxyz';
    const cache = parseInt(process.env.CACHE, 10) || 432000000;
    const sessionAge = parseInt(process.env.SESSION_AGE, 10) || 432000000;
    const dbPath = process.env.DB_PATH;

    if (!dbPath) {
      throw new Error('DB Path is not assigned');
    }

    return {
      url, port, apiPath, corsEnabled, maxUpload, maxParam, secret, cache, sessionAge, dbPath,
    };
  }
}
