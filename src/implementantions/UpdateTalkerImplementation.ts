import { ITalker } from "../entities/ITalker";
import { read } from "../helpers/read";
import { write } from "../helpers/write";
import { IUpdateTalkerRepository } from "../repositories/UpdateTalkerRepository";

export class UpdateTalkerImplementations implements IUpdateTalkerRepository {
  async updateTalker(talker: ITalker): Promise<ITalker> {
    const data = await read();
    const updTalker = data.find((t: ITalker) => t.id === talker.id);

    Object.assign(updTalker, talker);
    await write(data);

    return updTalker;
  }
}
