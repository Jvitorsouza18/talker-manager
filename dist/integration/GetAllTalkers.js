"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTalkersController = void 0;
const GetAllTalkersController_1 = require("../controllers/GetAllTalkersController");
const GetAllTalkersImplementations_1 = require("../implementantions/GetAllTalkersImplementations");
const GetAllTalkersUseCase_1 = require("../useCase/GetAllTalkersUseCase");
const getAllTalkersImplementation = new GetAllTalkersImplementations_1.GetAllTalkersImplementations();
const getAllTalkersUseCase = new GetAllTalkersUseCase_1.GetAllTalkersUseCase(getAllTalkersImplementation);
exports.getAllTalkersController = new GetAllTalkersController_1.GetAllTalkersController(getAllTalkersUseCase);
