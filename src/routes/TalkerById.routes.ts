import express from "express";

import { getTalkerByIdController } from "../integration/GetTalkerById";

const TalkerByIdRoute = express.Router();

TalkerByIdRoute.get("/talker/:id", async (request, response) => {
  return getTalkerByIdController.execute(request, response);
});

export { TalkerByIdRoute };
