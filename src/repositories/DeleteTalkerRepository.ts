export interface IDeleteTalkerRepository {
  deleteTalker(id: number): Promise<void>;
}
