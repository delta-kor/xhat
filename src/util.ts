import crypto from 'crypto';

export default class Util {
  static encode(target: string): string {
    return Buffer.from(target, 'utf-8').toString('base64');
  }

  static generateUserId(): string {
    return crypto.randomBytes(16).toString('hex');
  }
}
