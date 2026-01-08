const buffer = Buffer.from("Annas")
console.info(buffer.toString("base64"))

buffer.reverse()
console.info(buffer.toString())

const buffer64 = Buffer.from("QW5uYXM=", "base64")
console.info(buffer64.toString("utf-8"))