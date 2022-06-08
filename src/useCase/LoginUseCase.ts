import { ILoginRepository } from "../repositories/LoginRepository";

export class LoginUseCase {
  constructor(private loginRepository: ILoginRepository) {}
  async execute() {
    const token = this.loginRepository.GenerateToken();
    return token;
  }
}
