import { nanoid } from "nanoid";

import { ILoginRepository } from "../repositories/LoginRepository";

export class LoginImplementations implements ILoginRepository {
  async GenerateToken(): Promise<string> {
    const token = nanoid(16);
    return token;
  }
}
