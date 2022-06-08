import express from "express";

import { deleteTalkerController } from "../integration/DeleteTalker";
import { verifyTokenCreateTalker } from "../middleware/verifyTokenCreateTalker";

const DeleteTalkerRoute = express.Router();

DeleteTalkerRoute.delete(
  "/talker/:id",
  verifyTokenCreateTalker,
  async (request, response) => {
    return deleteTalkerController.execute(request, response);
  }
);

export { DeleteTalkerRoute };
