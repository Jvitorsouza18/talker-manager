import { SearchTalkerController } from "../controllers/SearchTalkerController";
import { SearchTalkerImplementations } from "../implementantions/SearchTalkerImplementations";
import { SearchTalkerUseCase } from "../useCase/SearchTalkerUseCase";

const SearchTalkerImplementation = new SearchTalkerImplementations();
const searchTalkerUseCase = new SearchTalkerUseCase(SearchTalkerImplementation);

export const searchTalkerController = new SearchTalkerController(
  searchTalkerUseCase
);
