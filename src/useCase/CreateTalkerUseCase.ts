import {
  ICreateTalkerRepository,
  IRequestedTalker,
} from "../repositories/CreateTalkerRepository";

export class CreateTalkerUseCase {
  constructor(private createTalkerRepositry: ICreateTalkerRepository) {}

  async execute(talker: IRequestedTalker) {
    return this.createTalkerRepositry.CreateTalker(talker);
  }
}
