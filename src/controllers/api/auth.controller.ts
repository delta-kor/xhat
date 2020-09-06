import { ExpressRequest, ExpressResponse } from '@interfaces/express';

export default class AuthController {
  static signup(req: ExpressRequest, res: ExpressResponse): any {
    console.log(req.body);
  }
}
