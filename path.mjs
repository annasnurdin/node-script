import path from "path";

const file = "/User/annas/file.txt";

console.info(path.sep, "sep");
console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));
console.info(path.parse(file));
