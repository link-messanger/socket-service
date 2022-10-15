import { Request, Response } from 'express';

export class PlaygroundController {
  constructor() {}

  public async getPlayground (req: Request, res: Response) {
    res.status(200).json({ message: 'this is playground!!' });
  };
}
