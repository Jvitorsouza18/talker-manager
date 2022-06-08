"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.read = void 0;
const promises_1 = require("fs/promises");
async function read() {
    try {
        const data = await (0, promises_1.readFile)("src/talker.json", { encoding: "utf8" });
        return JSON.parse(data);
    }
    catch (err) {
        let message = "Error occurred";
        if (err instanceof Error)
            message = err.message;
        throw new Error(message);
    }
}
exports.read = read;
