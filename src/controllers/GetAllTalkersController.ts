import { Request, Response } from "express";

import { GetAllTalkersUseCase } from "../useCase/GetAllTalkersUseCase";

export class GetAllTalkersController {
  constructor(private getAllTalkersUseCase: GetAllTalkersUseCase) {}
  async execute(req: Request, res: Response) {
    const talkers = await this.getAllTalkersUseCase.execute();

    return res.status(200).json(talkers);
  }
}
