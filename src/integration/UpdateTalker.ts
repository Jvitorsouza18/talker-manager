import { UpdateTalkerController } from "../controllers/UpdateTalkerController";
import { UpdateTalkerImplementations } from "../implementantions/UpdateTalkerImplementation";
import { UpdateTalkerUseCase } from "../useCase/UpdateTalkerUseCase";

const UpdateTalkerImplementation = new UpdateTalkerImplementations();
const updatedTalker = new UpdateTalkerUseCase(UpdateTalkerImplementation);

export const updatedTalkerController = new UpdateTalkerController(
  updatedTalker
);
