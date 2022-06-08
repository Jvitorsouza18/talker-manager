import { Request, Response } from "express";

import { LoginUseCase } from "../useCase/LoginUseCase";

export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  async execute(req: Request, res: Response) {
    const token = await this.loginUseCase.execute();
    return res.status(200).json({ token });
  }
}
