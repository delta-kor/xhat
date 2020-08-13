import { Response } from 'express';
import { ResponseRejected, ResponseResolved, Status } from '@interfaces/response';

export default class Reply {
  static resolve(res: Response, status: Status, data?: any): void {
    const response: ResponseResolved = {
      resolved: true,
      result: data,
      status,
    };
    res.json(response);
  }

  static reject(res: Response, status: Status, message?: string, data?: any): void {
    const response: ResponseRejected = {
      resolved: false,
      result: data,
      message,
      status,
    };
    res.json(response);
  }
}
