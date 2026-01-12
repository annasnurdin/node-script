import winston, { silly } from "winston"

test("create new logger with console transport", () => {
  const logger = winston.createLogger({
    level:"silly", //ini buat level urutan
    transports: [
      new winston.transports.Console({})
    ]
  })

  logger.log({level: "info", message: "This info"})
  logger.log({level: "warn", message: "This Warn"})
  logger.log({level: "http", message: "This HTTP"})
  logger.log({level: "verbose", message: "This Verbose"})
  logger.log({level: "debug", message: "This Debug"})
  logger.log({level: "silly", message: "This Silly"})
})