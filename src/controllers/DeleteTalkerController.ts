import { Request, Response } from "express";

import { DeleteTalkerUseCase } from "../useCase/DeleteTalkerUseCase";

export class DeleteTalkerController {
  constructor(private deleteTalkerUseCase: DeleteTalkerUseCase) {}

  execute(req: Request, res: Response) {
    const id = Number(req.params.id);

    this.deleteTalkerUseCase
      .execute(id)
      .then(() => {
        return res.status(204).send();
      })
      .catch((error: Error) => {
        return res.status(404).json({ message: error.message });
      });
  }
}
