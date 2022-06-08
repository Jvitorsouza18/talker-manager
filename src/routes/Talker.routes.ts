import express from "express";

import { getAllTalkersController } from "../integration/GetAllTalkers";

const TalkerRoute = express.Router();

TalkerRoute.get("/talker", async (request, response) => {
  return getAllTalkersController.execute(request, response);
});

export { TalkerRoute };
