import { ISearchTalkerRepository } from "../repositories/SearchTalkerRepository";

export class SearchTalkerUseCase {
  constructor(private searchTalkerRepository: ISearchTalkerRepository) {}
  async execute(name: string) {
    const search = await this.searchTalkerRepository.search(name);
    return search;
  }
}
