"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTalkerByIdController = void 0;
class GetTalkerByIdController {
    constructor(getTalkerByIdUseCase) {
        this.getTalkerByIdUseCase = getTalkerByIdUseCase;
    }
    async execute(req, res) {
        const { id } = req.params;
        this.getTalkerByIdUseCase
            .execute(Number(id))
            .then((talkers) => {
            return res.status(200).json(talkers);
        })
            .catch((error) => {
            return res.status(404).json({ message: error.message });
        });
    }
}
exports.GetTalkerByIdController = GetTalkerByIdController;
