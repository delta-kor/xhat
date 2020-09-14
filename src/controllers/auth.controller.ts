import validator from 'validator';
import { ExpressRequest, ExpressResponse } from '@interfaces/express';
import { Signup } from '@interfaces/auth';
import { Status } from '@interfaces/response';
import Output from '@providers/output';
import User from '@models/user';
import { NextFunction } from 'express';

export default class AuthController {
  static async signup(req: ExpressRequest, res: ExpressResponse, next: NextFunction): Promise<any> {
    if (req.user) {
      Output.reject(res, Status.SIGNUP_ALREADY_LOGINED);
      return false;
    }

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

    const user = new User({
      email: data.email,
      password: data.password,
    });

    const emailExists = await User.emailExists(data.email);

    if (emailExists) {
      Output.reject(res, Status.SIGNUP_EXISTING_USER);
      return false;
    }

    await user.save((saveError) => {
      if (saveError) { return next(saveError); }
      Output.resolve(res, Status.SUCCESS);
      return true;
    });

    return true;
  }
}
