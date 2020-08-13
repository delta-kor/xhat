import dotenv from 'dotenv';
import path from 'path';

export interface LocalValue {
  url: string;
  apiPath: string;
  corsEnabled: boolean;
}

export default class Local {
  static load(): LocalValue {
    dotenv.config({ path: path.join(__dirname, '../../.env') });

    const url = process.env.URL || '127.0.0.1';
    const apiPath = process.env.API_PATH || 'api';
    const corsEnabled = process.env.CORS_ENABLED === 'true';

    return { url, apiPath, corsEnabled };
  }
}
