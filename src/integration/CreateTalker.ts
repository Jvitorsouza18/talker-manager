import { CreateTalkerController } from "../controllers/CreateTalkerController";
import { CreateTalkerImplementations } from "../implementantions/CreateTalkerImplementation";
import { CreateTalkerUseCase } from "../useCase/CreateTalkerUseCase";

const CreateTalkerImplementation = new CreateTalkerImplementations();
const createTalkerUseCase = new CreateTalkerUseCase(CreateTalkerImplementation);

export const createTalker = new CreateTalkerController(createTalkerUseCase);
