import validator from 'validator';
import { ExpressRequest, ExpressResponse } from '@interfaces/express';
import { Signup } from '@interfaces/auth';
import { Status } from '@interfaces/response';
import Output from '@providers/output';

export default class AuthController {
  static async signup(req: ExpressRequest, res: ExpressResponse): Promise<any> {
    const data: Signup = req.body;

    if (!validator.isEmail(data.email)) {
      Output.reject(res, Status.SIGNUP_INVALID_EMAIL);
      return false;
    }
    if (data.password.length < 8) {
      Output.reject(res, Status.SIGNUP_SHORT_PASSWORD);
      return false;
    }
    if (!validator.equals(data.password, data.confirm)) {
      Output.reject(res, Status.SIGNUP_PASSWORD_UNMATCH);
      return false;
    }

    Output.resolve(res, Status.SUCCESS);
    return true;
  }
}
