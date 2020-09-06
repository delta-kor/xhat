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
