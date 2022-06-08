import { ITalker } from "../entities/ITalker";

export interface IUpdateTalker {
  name: string;
  age: number;
  talk: {
    watchedAt: string;
    rate: number;
  };
}

export interface IUpdateTalkerRepository {
  updateTalker(talker: IUpdateTalker): Promise<ITalker>;
}
