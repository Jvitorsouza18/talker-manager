import { ITalker } from "../entities/ITalker";

export interface IGetAllTalkersRepository {
  getAllTalkers(): Promise<ITalker[]>;
}
