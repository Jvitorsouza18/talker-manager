import { readFile } from "fs/promises";

async function read() {
  try {
    const data = await readFile("src/talker.json", { encoding: "utf8" });
    return JSON.parse(data);
  } catch (err) {
    let message = "Error occurred";

    if (err instanceof Error) message = err.message;
    throw new Error(message);
  }
}

export { read };
