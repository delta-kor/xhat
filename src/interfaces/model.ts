import { Document } from 'mongoose';

export interface UserDocument extends Document {
  uuid: string;
  email: string;
  password: string;
  comparePassword(password: string): Promise<boolean>;
}
