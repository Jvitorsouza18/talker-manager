import { ITalker } from "../entities/ITalker";
import { read } from "../helpers/read";
import { IGetTalkerByIdRepository } from "../repositories/GetTalkerByIdRepository";

export class GetTalkerByIdImplementations implements IGetTalkerByIdRepository {
  async getTalkerById(id: number): Promise<ITalker[]> {
    const talkers = await read();
    const talker = talkers.find(
      (currentTalker: ITalker) => id === currentTalker.id
    );
    return talker;
  }
}
