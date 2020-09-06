export enum Status {
  SUCCESS = 0,
  SIGNUP_INVALID_EMAIL = -400,
  SIGNUP_SHORT_PASSWORD = -401,
  SIGNUP_PASSWORD_UNMATCH = -402,
  SIGNUP_EXISTING_USER = -403,
  CRYPTO_INVALID_BODY_TYPE = -500,
  CRYPTO_INVALID_PARAMS = -501,
  CRYPTO_INVALID_TICKET = -502,
  CRYPTO_INVALID_HMAC = -503,
  CRYPTO_INVALID_JSON = -504,
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
