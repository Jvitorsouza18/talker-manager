import express from "express";

import { searchTalkerController } from "../integration/SearchTalker";
import { verifyTokenCreateTalker } from "../middleware/verifyTokenCreateTalker";

const SearchTalkerRoute = express.Router();

SearchTalkerRoute.get(
  "/talker/search",
  verifyTokenCreateTalker,
  async (request, response) => {
    return searchTalkerController.execute(request, response);
  }
);

export { SearchTalkerRoute };
