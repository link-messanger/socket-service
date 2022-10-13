import { Request, Response } from 'express';

export class PlaygroundController {
  constructor() {}

  public getPlayground = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'this is playground!!' });
  };
}
