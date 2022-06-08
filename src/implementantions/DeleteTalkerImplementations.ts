import { ITalker } from "../entities/ITalker";
import { read } from "../helpers/read";
import { write } from "../helpers/write";
import { IDeleteTalkerRepository } from "../repositories/DeleteTalkerRepository";

export class DeleteTalkerImplementations implements IDeleteTalkerRepository {
  async deleteTalker(id: number): Promise<void> {
    const data = await read();
    const newList = data.filter((t: ITalker) => t.id !== id);

    await write(newList);
  }
}
