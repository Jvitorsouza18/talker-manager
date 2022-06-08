import { writeFile } from "fs/promises";

import { ITalker } from "../entities/ITalker";

async function write(content: ITalker[]) {
  try {
    await writeFile("src/talker.json", JSON.stringify(content));
  } catch (err) {
    let message = "Error occurred";

    if (err instanceof Error) message = err.message;
    throw new Error(message);
  }
}

export { write };
