import process from "process";

process.addListener("exit", (exitcode) => {
  console.info("Node js stop with exit code: ", exitcode)
})

console.info(process.version)
console.table(process.argv)
console.table(process.report)

process.exit()

console.info("first")