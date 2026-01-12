import winston from "winston"

test("printf format", () => {
  const logger = winston.createLogger({
    level: "info",
    // default => format: winston.format.json(),
    format: winston.format.printf(info => {
      return `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`
    }),
    transports: [
      new winston.transports.Console({})
    ]
  })

  logger.info("Hellow logger")
})