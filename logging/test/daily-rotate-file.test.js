import winston from "winston"
import DailyRotateFile from "winston-daily-rotate-file"

test("create new logger with file and console transport", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new DailyRotateFile({
        filename: "app-%DATE%.log",
        zippedArchive: true,
        maxSize: "1m",
        maxFiles: "14d"
      })
    ]
  })

  for (let index = 0; index < 100000; index++) {
    logger.info("Hellow " + index)    
  }
})