import { Request, Response } from "express";

import { GetTalkerByIdUseCase } from "../useCase/GetTalkerByIdUseCase";

export class GetTalkerByIdController {
  constructor(private getTalkerByIdUseCase: GetTalkerByIdUseCase) {}
  async execute(req: Request, res: Response) {
    const { id } = req.params;

    this.getTalkerByIdUseCase
      .execute(Number(id))
      .then((talkers) => {
        return res.status(200).json(talkers);
      })
      .catch((error: Error) => {
        return res.status(404).json({ message: error.message });
      });
  }
}
