class Communicate {
  public key: string;

  constructor() {
    const keyEncoded = document.getElementById('key')?.getAttribute('value');
    if (!keyEncoded) throw new Error('Key not found');

    this.key = CryptoJS.enc.Base64.parse(keyEncoded).toString(CryptoJS.enc.Utf8);
  }

  async send(url: string, data: any): Promise<void> {
    const payload = CryptoJS.enc.Utf8.parse(JSON.stringify(url));
    const aesKey = CryptoJS.lib.WordArray.random(32);
    const aesIv = CryptoJS.lib.WordArray.random(32);
    const cipher = CryptoJS.AES.encrypt(
      payload,
      aesKey,
      { iv: aesIv, mode: CryptoJS.mode.CBC },
    ).toString();

    const pem = this.key.substring(26, this.key.length - 24);
    const der = window.atob(pem);
    const buffer = new ArrayBuffer(der.length);
    const bufferView = new Uint8Array(buffer);
    for (let i = 0, len = der.length; i < len; i += 1) {
      bufferView[i] = der.charCodeAt(i);
    }

    const key = await window.crypto.subtle.importKey(
      'spki',
      buffer,
      {
        name: 'RSA-OAEP',
        hash: 'SHA-256',
      },
      true,
      ['encrypt'],
    );
    const encodedAESKey = new TextEncoder().encode(aesKey.toString());
    const rsaCipher = await window.crypto.subtle.encrypt(
      { name: 'RSA-OAEP' },
      key, encodedAESKey,
    );
  }
}

const communicate = new Communicate();
