import crypto from 'crypto';

export interface Ticket {
  public: string;
  private: string;
}

export default class Crypto {
  static async bookTicket(): Promise<Ticket> {
    return new Promise<Ticket>((resolve, reject) => {
      crypto.generateKeyPair('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: {
          type: 'spki',
          format: 'pem',
        },
        privateKeyEncoding: {
          type: 'pkcs8',
          format: 'pem',
        },
      }, (err, publicKey, privateKey) => {
        if (err) {
          reject(err);
          return false;
        }
        resolve({ public: publicKey, private: privateKey });
        return true;
      });
    });
  }
}
