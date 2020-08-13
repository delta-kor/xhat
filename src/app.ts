import http from 'http';
import express from 'express';
import Route from './providers/route';
import Kernel from './middlewares/kernel';

export default class App {
  public port: number;

  private application: express.Application;

  private server: http.Server;

  constructor(port: number) {
    this.port = port;
    this.application = express();
    this.server = http.createServer(this.application);
    this.init();
  }

  init(): void {
    this.mountMiddlewares();
    this.mountRoutes();
  }

  mountMiddlewares(): void {
    Kernel.init(this.application);
  }

  mountRoutes(): void {
    Route.mountApi(this.application);
    Route.mountWeb(this.application);
  }

  start(onStart: (port: number) => void): void {
    this.server.listen(this.port);
    if (onStart) onStart(this.port);
  }
}
