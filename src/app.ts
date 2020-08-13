import http from 'http';
import express from 'express';

export default class App {
  public port: number;

  private application: express.Application;

  private server: http.Server;

  constructor(port: number) {
    this.port = port;
    this.application = express();
    this.server = http.createServer(this.application);
  }

  start(onStart: (port: number) => void): void {
    this.server.listen(this.port);
    if (onStart) onStart(this.port);
  }
}
