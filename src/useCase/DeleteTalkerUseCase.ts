import { IDeleteTalkerRepository } from "../repositories/DeleteTalkerRepository";

export class DeleteTalkerUseCase {
  constructor(private deleteTalkerImplementation: IDeleteTalkerRepository) {}
  async execute(id: number) {
    await this.deleteTalkerImplementation.deleteTalker(id);
  }
}
