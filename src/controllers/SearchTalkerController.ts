import { Request, Response } from "express";

import { SearchTalkerUseCase } from "../useCase/SearchTalkerUseCase";

export class SearchTalkerController {
  constructor(private searchTalker: SearchTalkerUseCase) {}
  async execute(req: Request, res: Response) {
    const { q: name } = req.query;
    this.searchTalker.execute(name as string).then((talkers) => {
      return res.status(200).json(talkers);
    });
  }
}
