import crypto from 'crypto';
import axios, { Method } from 'axios';

interface Payload {
  iv: string;
  key: string;
  cipher: string;
  hash: string;
}

export default class Communicate {
  public key: Buffer;

  constructor() {
    const keyEncoded = document.getElementById('key')?.getAttribute('value');
    if (!keyEncoded) throw new Error('Key not found');

    this.key = Buffer.from(keyEncoded, 'base64');
  }

  async send(url: string, method: Method, data: any): Promise<void> {
    const payload = JSON.stringify(data);

    const encryptionKey = crypto.randomBytes(32);
    const encryptionIv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, encryptionIv);
    let encrypted = cipher.update(payload, 'utf8', 'base64');
    encrypted += cipher.final('base64');

    const keyEncrypted = crypto.publicEncrypt(this.key, encryptionKey);

    const hmac = crypto.createHmac('sha256', encryptionKey);
    hmac.update(payload);
    const hash = hmac.digest('base64');

    const requestData: Payload = {
      iv: encryptionIv.toString('base64'),
      key: keyEncrypted.toString('base64'),
      cipher: encrypted,
      hash,
    };
    axios({
      url, method, data: requestData,
    });
  }
}
