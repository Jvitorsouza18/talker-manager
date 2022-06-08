import { ITalker } from "../entities/ITalker";
import { read } from "../helpers/read";
import { IGetAllTalkersRepository } from "../repositories/GetAllTalkersRepository";

export class GetAllTalkersImplementations implements IGetAllTalkersRepository {
  async getAllTalkers(): Promise<ITalker[]> {
    const talker = await read();
    return talker;
  }
}
