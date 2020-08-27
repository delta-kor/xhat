import http from 'http';
import express from 'express';
import Route from '@providers/route';
import Kernel from '@middlewares/kernel';
import Local from '@providers/local';

export default class App {
  public port: number;

  private readonly application: express.Application;

  private readonly server: http.Server;

  constructor() {
    this.port = Local.load().port;
    this.application = express();
    this.server = http.createServer(this.application);
    this.init();
  }

  init(): void {
    this.mountMiddlewares();
    this.mountRoutes();
  }

  mountMiddlewares(): void {
    Kernel.mount(this.application);
  }

  mountRoutes(): void {
    Route.mount(this.application);
  }

  start(onStart: (port: number) => void): void {
    this.server.listen(this.port);
    if (onStart) onStart(this.port);
  }
}
