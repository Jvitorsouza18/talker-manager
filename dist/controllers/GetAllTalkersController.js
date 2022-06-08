"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllTalkersController = void 0;
class GetAllTalkersController {
    constructor(getAllTalkersUseCase) {
        this.getAllTalkersUseCase = getAllTalkersUseCase;
    }
    async execute(req, res) {
        const talkers = await this.getAllTalkersUseCase.execute();
        return res.status(200).json(talkers);
    }
}
exports.GetAllTalkersController = GetAllTalkersController;
