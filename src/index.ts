import bodyParser from "body-parser";
import express from "express";

import { CreateTalker } from "./routes/CreateTalker.routes";
import { DeleteTalkerRoute } from "./routes/DeleteTalker.routes";
import { LoginRoute } from "./routes/Login.routes";
import { SearchTalkerRoute } from "./routes/SearchTalker.routes";
import { TalkerRoute } from "./routes/Talker.routes";
import { TalkerByIdRoute } from "./routes/TalkerById.routes";
import { UpdatedTalkerRoute } from "./routes/UpdateTalker.routes";

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = "3000";

// não remova esse endpoint, e para o avaliador funcionar
app.get("/", (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use(TalkerRoute);
app.use(SearchTalkerRoute);
app.use(TalkerByIdRoute);
app.use(LoginRoute);
app.use(CreateTalker);
app.use(UpdatedTalkerRoute);
app.use(DeleteTalkerRoute);

app.listen(PORT, () => {
  console.log("Online");
});
