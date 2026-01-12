import winston from "winston"

test("create new logger with file and console transport", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "application.json"
      }), // bisa bikin beberapa file
      new winston.transports.File({
        level: "error",
        filename: "application-error.json"
      })
    ]
  })

  logger.info("Logger info")
  logger.info("Logger info1")
  logger.info("Logger info2")
  logger.error("Logger info3")
  logger.error("Logger info4")
})