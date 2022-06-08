import express from "express";

import { updatedTalkerController } from "../integration/UpdateTalker";
import { verifyCreateTalker } from "../middleware/verifyCreateTalker";
import { verifyTokenCreateTalker } from "../middleware/verifyTokenCreateTalker";

const UpdatedTalkerRoute = express.Router();

UpdatedTalkerRoute.put(
  "/talker/:id",
  verifyCreateTalker,
  verifyTokenCreateTalker,
  async (request, response) => {
    return updatedTalkerController.execute(request, response);
  }
);

export { UpdatedTalkerRoute };
