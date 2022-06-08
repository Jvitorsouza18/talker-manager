"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTalkerByIdController = void 0;
const GetTalkerByIdController_1 = require("../controllers/GetTalkerByIdController");
const GetTalkerByIdImplementation_1 = require("../implementantions/GetTalkerByIdImplementation");
const GetTalkerByIdUseCase_1 = require("../useCase/GetTalkerByIdUseCase");
const GetTalkerByIdImplementation = new GetTalkerByIdImplementation_1.GetTalkerByIdImplementations();
const getTalkerByIdUseCase = new GetTalkerByIdUseCase_1.GetTalkerByIdUseCase(GetTalkerByIdImplementation);
exports.getTalkerByIdController = new GetTalkerByIdController_1.GetTalkerByIdController(getTalkerByIdUseCase);
