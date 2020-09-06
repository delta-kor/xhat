import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Application } from 'express';
import { UserDocument } from '@interfaces/model';
import User from '@models/user';

export default class Passport {
  static mount(express: Application): Application {
    express.use(passport.initialize());
    express.use(passport.session());

    passport.serializeUser<UserDocument, string>((user, done) => {
      done(null, user.uuid);
    });

    passport.deserializeUser<UserDocument, string>((id, done) => {
      User.findOne({ uuid: id }, (err, user) => {
        done(err, user);
      });
    });

    passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      User.findOne({ email: email.toLowerCase() }, async (err, user: UserDocument) => {
        if (err) { return done(err); }
        if (!user) {
          return done(undefined, false);
        }
        const match = user.comparePassword(password);
        if (match) return done(undefined, user);
        return done(undefined, false);
      });
    }));
    return express;
  }
}
