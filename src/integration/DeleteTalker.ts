import { DeleteTalkerController } from "../controllers/DeleteTalkerController";
import { DeleteTalkerImplementations } from "../implementantions/DeleteTalkerImplementations";
import { DeleteTalkerUseCase } from "../useCase/DeleteTalkerUseCase";

const DeleteTalkerImplementation = new DeleteTalkerImplementations();
const deleteTalker = new DeleteTalkerUseCase(DeleteTalkerImplementation);

export const deleteTalkerController = new DeleteTalkerController(deleteTalker);
