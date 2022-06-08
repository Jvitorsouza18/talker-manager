"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TalkerByIdRoute = void 0;
const express_1 = __importDefault(require("express"));
const GetTalkerById_1 = require("../integration/GetTalkerById");
const TalkerByIdRoute = express_1.default.Router();
exports.TalkerByIdRoute = TalkerByIdRoute;
TalkerByIdRoute.get("/talker/:id", async (request, response) => {
    return GetTalkerById_1.getTalkerByIdController.execute(request, response);
});
