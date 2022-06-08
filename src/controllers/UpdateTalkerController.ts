import { Request, Response } from "express";

import { UpdateTalkerUseCase } from "../useCase/UpdateTalkerUseCase";

export class UpdateTalkerController {
  constructor(private updateTalkerUseCase: UpdateTalkerUseCase) {}
  execute(req: Request, res: Response) {
    const { body: talker } = req;
    const { id } = req.params;

    talker.id = Number(id);

    this.updateTalkerUseCase
      .execute(talker)
      .then((talker) => {
        return res.status(200).json(talker);
      })
      .catch((error: Error) => {
        return res.status(404).json({ message: error.message });
      });
  }
}
