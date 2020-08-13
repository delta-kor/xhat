import dotenv from 'dotenv';
import path from 'path';

export interface LocalValue {
  apiPath: string;
}

export default class Local {
  static load(): LocalValue {
    dotenv.config({ path: path.join(__dirname, '../../.env') });

    const apiPath = process.env.API_PATH || 'api';

    return { apiPath };
  }
}
