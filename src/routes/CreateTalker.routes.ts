import express from "express";

import { createTalker } from "../integration/CreateTalker";
import { verifyCreateTalker } from "../middleware/verifyCreateTalker";
import { verifyTokenCreateTalker } from "../middleware/verifyTokenCreateTalker";

const CreateTalker = express.Router();

CreateTalker.post(
  "/talker",
  verifyTokenCreateTalker,
  verifyCreateTalker,
  async (request, response) => {
    return createTalker.execute(request, response);
  }
);

export { CreateTalker };
