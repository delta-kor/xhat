import { ResponseRejected, ResponseResolved, Status } from '@interfaces/response';
import { ExpressResponse } from '@interfaces/express';

export default class Output {
  static resolve(res: ExpressResponse, status: Status, data?: any): void {
    const response: ResponseResolved = {
      resolved: true,
      result: data,
      status,
    };
    res.json(response);
  }

  static reject(res: ExpressResponse, status: Status, message?: string, data?: any): void {
    const response: ResponseRejected = {
      resolved: false,
      result: data,
      message,
      status,
    };
    res.json(response);
  }
}
