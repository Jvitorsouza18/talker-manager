"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = void 0;
const promises_1 = require("fs/promises");
async function write(content) {
    try {
        await (0, promises_1.writeFile)("src/talker.json", JSON.stringify(content));
    }
    catch (err) {
        let message = "Error occurred";
        if (err instanceof Error)
            message = err.message;
        throw new Error(message);
    }
}
exports.write = write;
