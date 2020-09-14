import { Document, Model } from 'mongoose';

export interface UserDocument extends Document {
  uuid: string;
  email: string;
  password: string;
  comparePassword(password: string): Promise<boolean>;
}

export interface UserModel extends Model<UserDocument> {
  getUser(id: string): Promise<UserDocument | null>;
  emailExists(email: string): Promise<boolean>
}
