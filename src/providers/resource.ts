export enum Language {
  ENGLISH, KOREAN
}

interface IResource {
  [key: string]: string;
  XCHAT: string;
  LANGUAGE_NAME: string;
  NOTFOUND_TITLE: string;
  NOTFOUND_DESCRIPTION: string;
  GO_BACK: string;
  INTERNAL_ERROR_TITLE: string;
  SIGNUP_METHOD_TITLE: string;
  SIGNUP_METHOD_DESCRIPTION: string;
  SIGNUP_EMAIL_TITLE: string;
  SIGNUP_EMAIL_DESCRIPTION: string;
  EMAIL: string;
  PASSWORD: string;
  CONFIRM_PASSWORD: string;
  SIGNUP: string;
  SIGNUP_INVALID_EMAIL: string;
  SIGNUP_SHORT_PASSWORD: string;
  SIGNUP_PASSWORD_UNMATCH: string;
  SIGNUP_EXISTING_USER: string;
  UNEXPECTED_ERROR: string;
  LOGIN_TITLE: string;
  LOGIN_DESCRIPTION: string;
  FORGET_PASSWORD: string;
  LOGIN: string;
}

const EnglishResource: IResource = {
  LANGUAGE_NAME: 'English',
  XCHAT: 'X-CHAT',
  NOTFOUND_TITLE: 'Uh oh!',
  NOTFOUND_DESCRIPTION: 'Nothing here...',
  GO_BACK: 'Go Back',
  INTERNAL_ERROR_TITLE: 'Internal Server Error',
  SIGNUP_METHOD_TITLE: 'Welcome',
  SIGNUP_METHOD_DESCRIPTION: 'Select sign up method',
  SIGNUP_EMAIL_TITLE: 'Let\'s get started',
  SIGNUP_EMAIL_DESCRIPTION: 'It\'s totally free',
  EMAIL: 'Email',
  PASSWORD: 'Password',
  CONFIRM_PASSWORD: 'Confirm Password',
  SIGNUP: 'SIGN UP',
  SIGNUP_INVALID_EMAIL: 'Invalid email',
  SIGNUP_SHORT_PASSWORD: 'Password too short\nIt must be at least 8 characters',
  SIGNUP_PASSWORD_UNMATCH: 'Check password again',
  SIGNUP_EXISTING_USER: 'Email already exists',
  UNEXPECTED_ERROR: 'Unexpected error occurred\nTry again later',
  LOGIN_TITLE: 'Hello there!',
  LOGIN_DESCRIPTION: 'Login to xchat account',
  FORGET_PASSWORD: 'Forgot Password?',
  LOGIN: 'LOG IN',
};

/* const KoreanResource: IResource = {
  LANGUAGE_NAME: '한국어',
}; */

export default class Resource {
  private readonly language: Language;

  constructor(lang: Language) {
    this.language = lang;
  }

  export(): IResource {
    if (this.language === Language.ENGLISH) return EnglishResource;
    // if (this.language === Language.KOREAN) return KoreanResource;
    return null;
  }
}
