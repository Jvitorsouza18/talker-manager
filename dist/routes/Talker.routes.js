"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TalkerRoute = void 0;
const express_1 = __importDefault(require("express"));
const GetAllTalkers_1 = require("../integration/GetAllTalkers");
const TalkerRoute = express_1.default.Router();
exports.TalkerRoute = TalkerRoute;
TalkerRoute.get("/talker", async (request, response) => {
    return GetAllTalkers_1.getAllTalkersController.execute(request, response);
});
