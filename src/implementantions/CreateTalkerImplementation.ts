import { ITalker } from "../entities/ITalker";
import { read } from "../helpers/read";
import { write } from "../helpers/write";
import {
  ICreateTalkerRepository,
  IRequestedTalker,
} from "../repositories/CreateTalkerRepository";

export class CreateTalkerImplementations implements ICreateTalkerRepository {
  async CreateTalker(talker: IRequestedTalker): Promise<ITalker> {
    const talkers = await read();

    const id = talkers.length + 1;
    const completeTalker = { ...talker, id };
    const newTalkersList = [...talkers, completeTalker];

    await write(newTalkersList);
    return completeTalker;
  }
}
