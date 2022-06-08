import { Request, Response } from "express";

import { CreateTalkerUseCase } from "../useCase/CreateTalkerUseCase";

export class CreateTalkerController {
  constructor(private createTalkerUseCase: CreateTalkerUseCase) {}

  async execute(req: Request, res: Response) {
    const { name, age, talk } = req.body;
    const talker = {
      name,
      age,
      talk,
    };
    const completeTalker = await this.createTalkerUseCase.execute(talker);
    return res.status(201).json(completeTalker);
  }
}
