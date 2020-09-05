import { Request } from 'express';

export interface ExpressRequest extends Request {
  isXHR: boolean;
}
