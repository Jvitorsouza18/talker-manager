"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const Talker_routes_1 = require("./routes/Talker.routes");
const TalkerById_routes_1 = require("./routes/TalkerById.routes");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const HTTP_OK_STATUS = 200;
const PORT = "3000";
// não remova esse endpoint, e para o avaliador funcionar
app.get("/", (_request, response) => {
    response.status(HTTP_OK_STATUS).send();
});
app.use(Talker_routes_1.TalkerRoute);
app.use(TalkerById_routes_1.TalkerByIdRoute);
app.listen(PORT, () => {
    console.log("Online");
});
