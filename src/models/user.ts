import bcrypt from 'bcrypt-nodejs';
import { model, Schema } from 'mongoose';
import { UserDocument, UserModel } from '@interfaces/model';
import Util from '../util';

const UserSchema = new Schema<UserDocument>({
  uuid: {
    type: String, unique: true, required: true, default: Util.generateUserId,
  },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

UserSchema.pre<UserDocument>('save', function save(next) {
  if (!this.isModified('password')) { return next(); }

  bcrypt.genSalt(10, (saltError, salt) => {
    if (saltError) { return next(saltError); }

    bcrypt.hash(this.password, salt, undefined, (hashError, hash) => {
      if (hashError) { return next(hashError); }
      this.password = hash;
      return next();
    });

    return true;
  });

  return true;
});

UserSchema.methods
  .comparePassword = async function comparePassword(password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) reject(err);
        resolve(isMatch);
      });
    });
  };

UserSchema.statics
  .getUser = async function getUser(uuid: string): Promise<UserDocument | null> {
    const user = await this.findOne({ uuid }).exec();
    return user || null;
  };

UserSchema.statics
  .emailExists = async function emailExits(email: string): Promise<boolean> {
    const user = await this.findOne({ email }).exec();
    return !!user;
  };

const User = model<UserDocument, UserModel>('User', UserSchema);

export default User;
