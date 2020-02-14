import winston from "winston"
import path from "path"

export default function getLogger(filename) {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { src: path.relative(__dirname, filename) },
    transports: [
      new winston.transports.File({
        filename: "logs/error.log",
        level: "error",
      }),
      new winston.transports.File({ filename: "logs/combined.log" }),
    ],
    exceptionHandlers: [
      new winston.transports.File({ filename: "logs/exceptions.log" }),
    ],
  })

  // Add console if not in production
  if (process.env.NODE_ENV !== "production") {
    logger.add(
      new winston.transports.Console({
        format: winston.format.simple(),
      })
    )
  }

  return logger
}
