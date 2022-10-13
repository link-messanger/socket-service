import { Router } from "express";
import { Routes } from '@interfaces/routes.interface';
import { PlaygroundController } from "@controllers/index";

export class PlaygroundRoute implements Routes {
  public path = '/playground';
  public router = Router();
  public playgroundController = new PlaygroundController();
  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes(): void {
    this.router.get(`${this.path}/` , this.playgroundController.getPlayground);
  }
}


