import winston from "winston"

test("create new logger with file and console transport", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "exception.log",
        handleExceptions: true
      }) 
    ]
  })

  hello()

 
})