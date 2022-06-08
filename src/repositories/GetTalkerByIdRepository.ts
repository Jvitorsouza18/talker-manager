import { ITalker } from "../entities/ITalker";

export interface IGetTalkerByIdRepository {
  getTalkerById(id: number): Promise<ITalker[]>;
}
