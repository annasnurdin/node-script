import winston from "winston"

test("logging with format", () => {
  const logger = winston.createLogger({
    level: "info",
    // default => format: winston.format.json(),
    format: winston.format.combine(
      winston.format.timestamp(), // ini yang di combine
      winston.format.ms(),
      winston.format.json() // ini format keluaran harus, bisa simpel, json
    ),
    transports: [
      new winston.transports.Console({})
    ]
  })

  logger.info("Hellow logger")
  logger.info("Hellow logger")
  logger.info("Hellow logger")
  logger.info("Hellow logger")
  logger.info("Hellow logger")
})