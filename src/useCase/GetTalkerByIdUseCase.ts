import { IGetTalkerByIdRepository } from "../repositories/GetTalkerByIdRepository";

export class GetTalkerByIdUseCase {
  constructor(private getTalkerByIdRepository: IGetTalkerByIdRepository) {}
  async execute(id: number) {
    const talker = await this.getTalkerByIdRepository.getTalkerById(id);
    if (!talker) {
      throw new Error("Pessoa palestrante não encontrada");
    }
    return talker;
  }
}
