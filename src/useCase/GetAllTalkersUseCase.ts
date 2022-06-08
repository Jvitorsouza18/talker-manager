import { IGetAllTalkersRepository } from "../repositories/GetAllTalkersRepository";

export class GetAllTalkersUseCase {
  constructor(private getAllTalkersRepository: IGetAllTalkersRepository) {}
  async execute() {
    const talkers = await this.getAllTalkersRepository.getAllTalkers();
    return talkers;
  }
}
