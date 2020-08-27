import dotenv from 'dotenv';
import path from 'path';

export interface LocalValue {
  url: string;
  port: number;
  apiPath: string;
  corsEnabled: boolean;
  maxUpload: string;
  maxParam: number;
  secret: string;
  cache: number;
  sessionAge: number;
  dbPath: string;
}

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
      console.error('DB Path is not assigned');
      process.exit(1);
    }

    return {
      url, port, apiPath, corsEnabled, maxUpload, maxParam, secret, cache, sessionAge, dbPath,
    };
  }
}
