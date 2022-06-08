import {
  IUpdateTalker,
  IUpdateTalkerRepository,
} from "../repositories/UpdateTalkerRepository";

export class UpdateTalkerUseCase {
  constructor(private updateTalkerImplementation: IUpdateTalkerRepository) {}
  async execute(talker: IUpdateTalker) {
    const talkerUse = await this.updateTalkerImplementation.updateTalker(
      talker
    );
    return talkerUse;
  }
}
