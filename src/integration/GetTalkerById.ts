import { GetTalkerByIdController } from "../controllers/GetTalkerByIdController";
import { GetTalkerByIdImplementations } from "../implementantions/GetTalkerByIdImplementation";
import { GetTalkerByIdUseCase } from "../useCase/GetTalkerByIdUseCase";

const GetTalkerByIdImplementation = new GetTalkerByIdImplementations();
const getTalkerByIdUseCase = new GetTalkerByIdUseCase(
  GetTalkerByIdImplementation
);

export const getTalkerByIdController = new GetTalkerByIdController(
  getTalkerByIdUseCase
);
