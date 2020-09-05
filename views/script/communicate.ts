export default class Communicate {
  public key: string;

  constructor() {
    const keyEncoded = document.getElementById('key')?.getAttribute('value');
    if (!keyEncoded) throw new Error('Key not found');

    this.key = Buffer.from(keyEncoded, 'base64').toString('utf8');
  }
}
