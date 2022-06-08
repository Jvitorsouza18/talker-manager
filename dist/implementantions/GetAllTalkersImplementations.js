"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllTalkersImplementations = void 0;
const read_1 = require("../helpers/read");
class GetAllTalkersImplementations {
    async getAllTalkers() {
        const talker = await (0, read_1.read)();
        return talker;
    }
}
exports.GetAllTalkersImplementations = GetAllTalkersImplementations;
