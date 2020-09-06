import { Request, Response } from 'express';
import { Ticket } from '@providers/crypto';

export interface ExpressRequest extends Request {
  isXHR: boolean;
  ticket: Ticket;
}

export interface ExpressResponse extends Response { }
