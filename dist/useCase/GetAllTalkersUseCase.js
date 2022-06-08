"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllTalkersUseCase = void 0;
class GetAllTalkersUseCase {
    constructor(getAllTalkersRepository) {
        this.getAllTalkersRepository = getAllTalkersRepository;
    }
    async execute() {
        const talkers = await this.getAllTalkersRepository.getAllTalkers();
        return talkers;
    }
}
exports.GetAllTalkersUseCase = GetAllTalkersUseCase;
