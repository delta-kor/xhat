export default class Util {
  static encode(target: string): string {
    return Buffer.from(target, 'utf-8').toString('base64');
  }
}
