"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTalkerByIdUseCase = void 0;
class GetTalkerByIdUseCase {
    constructor(getTalkerByIdRepository) {
        this.getTalkerByIdRepository = getTalkerByIdRepository;
    }
    async execute(id) {
        const talker = await this.getTalkerByIdRepository.getTalkerById(id);
        if (!talker) {
            throw new Error("Pessoa palestrante não encontrada");
        }
        return talker;
    }
}
exports.GetTalkerByIdUseCase = GetTalkerByIdUseCase;
