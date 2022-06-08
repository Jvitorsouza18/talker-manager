export interface IRequestedTalker {
  name: string;
  age: number;
  talk: {
    watchedAt: string;
    rate: number;
  };
}

export interface ICreateTalkerRepository {
  CreateTalker(talker: IRequestedTalker): void;
}
