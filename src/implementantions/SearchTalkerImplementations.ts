import { ITalker } from "../entities/ITalker";
import { read } from "../helpers/read";
import {
  ISearchTalker,
  ISearchTalkerRepository,
} from "../repositories/SearchTalkerRepository";

export class SearchTalkerImplementations implements ISearchTalkerRepository {
  async search(name: string): Promise<ISearchTalker> {
    const talkers = await read();

    const talkersResult = talkers.filter((t: ITalker) =>
      t.name.toLocaleLowerCase().includes(name.toLowerCase())
    );
    return talkersResult;
  }
}
