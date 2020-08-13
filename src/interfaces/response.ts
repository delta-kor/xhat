export enum Status {
  SUCCESS = 0,
  NOT_FOUND = -1000,
  INTERNAL_ERROR = -2000
}

interface Response {
    resolved: boolean;
    status: Status;
    result?: any;
}

export interface ResponseResolved extends Response {
  resolved: true;
}

export interface ResponseRejected extends Response {
  resolved: false;
  message?: string;
}
