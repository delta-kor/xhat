import bcrypt from 'bcrypt-nodejs';
import { model, Schema } from 'mongoose';
import { UserDocument } from '@interfaces/model';

const UserSchema = new Schema({
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

const User = model<UserDocument>('User', UserSchema);
export default User;
