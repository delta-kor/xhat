import mongoose from 'mongoose';
import Local from '@providers/local';

export default class Database {
  static async mount(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      mongoose.connect(
        Local.load().dbPath,
        { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
      )
        .then(resolve)
        .catch(reject);
    });
  }
}
