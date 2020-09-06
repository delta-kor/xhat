import validator from 'validator';
import { ExpressRequest, ExpressResponse } from '@interfaces/express';
import { Signup } from '@interfaces/auth';
import { Status } from '@interfaces/response';
import Output from '@providers/output';
import User from '@models/user';
import { NextFunction } from 'express';

export default class AuthController {
  static signup(req: ExpressRequest, res: ExpressResponse, next: NextFunction): any {
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

    User.findOne({ email: data.email }, (findError, userDoc) => {
      if (findError) { return next(findError); }
      if (userDoc) {
        Output.reject(res, Status.SIGNUP_EXISTING_USER);
        return false;
      }

      user.save((saveError) => {
        if (saveError) { return next(saveError); }
        req.logIn(user, (logInError) => {
          if (logInError) { return next(logInError); }
          return true;
        });
        return true;
      });

      return true;
    });

    // Output.resolve(res, Status.SUCCESS);
    return true;
  }
}
