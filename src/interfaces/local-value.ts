export interface LocalValue {
  url: string;
  port: number;
  apiPath: string;
  corsEnabled: boolean;
  maxUpload: string;
  maxParam: number;
  secret: string;
  cache: number;
  sessionAge: number;
  dbPath: string;
}
