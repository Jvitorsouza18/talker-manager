import express from "express";

import { loginController } from "../integration/Login";
import { verifyEmail } from "../middleware/verifyEmailRegex";

const LoginRoute = express.Router();

LoginRoute.post("/login", verifyEmail, async (request, response) => {
  return loginController.execute(request, response);
});

export { LoginRoute };
