class Communicate {
  public key: string;

  constructor() {
    const keyEncoded = document.getElementById('key')?.getAttribute('value');
    if (!keyEncoded) throw new Error('Key not found');

    this.key = CryptoJS.enc.Base64.parse(keyEncoded).toString(CryptoJS.enc.Utf8);
  }
}

const communicate = new Communicate();
