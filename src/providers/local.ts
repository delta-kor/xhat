import dotenv from 'dotenv';
import path from 'path';

export interface LocalValue {
  url: string;
  port: number;
  apiPath: string;
  corsEnabled: boolean;
}

export default class Local {
  static load(): LocalValue {
    dotenv.config({ path: path.join(__dirname, '../../.env') });

    const url = process.env.URL || '127.0.0.1';
    const port = parseInt(process.env.PORT, 10) || 3000;
    const apiPath = process.env.API_PATH || 'api';
    const corsEnabled = process.env.CORS_ENABLED === 'true';

    return {
      url, port, apiPath, corsEnabled,
    };
  }
}
