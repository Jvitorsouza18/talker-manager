"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTalkerByIdImplementations = void 0;
const read_1 = require("../helpers/read");
class GetTalkerByIdImplementations {
    async getTalkerById(id) {
        const talkers = await (0, read_1.read)();
        const talker = talkers.find((currentTalker) => id === currentTalker.id);
        return talker;
    }
}
exports.GetTalkerByIdImplementations = GetTalkerByIdImplementations;
