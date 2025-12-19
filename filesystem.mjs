import fs from "fs/promises";

const buffer = await fs.readFile("filesystem.mjs");

console.info(buffer, "buffer");
console.info(buffer.toString(), "buffer string");

await fs.writeFile("test.txt", "Tes Data Baru");
