import { LoginController } from "../controllers/LoginController";
import { LoginImplementations } from "../implementantions/LoginImplementation";
import { LoginUseCase } from "../useCase/LoginUseCase";

const LoginImplementation = new LoginImplementations();
const loginUseCase = new LoginUseCase(LoginImplementation);

export const loginController = new LoginController(loginUseCase);
