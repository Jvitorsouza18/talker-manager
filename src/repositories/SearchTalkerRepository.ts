import { ITalker } from "../entities/ITalker";

export type ISearchTalker = ITalker[] | [];

export interface ISearchTalkerRepository {
  search(name: string): Promise<ISearchTalker>;
}
