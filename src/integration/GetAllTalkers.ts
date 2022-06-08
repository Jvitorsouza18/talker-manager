import { GetAllTalkersController } from "../controllers/GetAllTalkersController";
import { GetAllTalkersImplementations } from "../implementantions/GetAllTalkersImplementations";
import { GetAllTalkersUseCase } from "../useCase/GetAllTalkersUseCase";

const getAllTalkersImplementation = new GetAllTalkersImplementations();
const getAllTalkersUseCase = new GetAllTalkersUseCase(
  getAllTalkersImplementation
);

export const getAllTalkersController = new GetAllTalkersController(
  getAllTalkersUseCase
);
