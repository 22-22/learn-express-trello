import { createLogger, transports, format } from "winston";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logger = createLogger({});

const customFormat = format.combine(format.timestamp(), format.json());

if (process.env.NODE_ENV == "production") {
  logger.add(
    new transports.File({
      filename: path.join(__dirname, "../../logs/info.log"),
      level: "info",
      format: customFormat,
    })
  ),
    logger.add(
      new transports.File({
        filename: path.join(__dirname, "../../logs/error.log"),
        level: "error",
        format: customFormat,
      })
    );
} else {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  );
}

export const logInfo = (req, res, next) => {
  const { url, query, body } = req;
  logger.info(
    `URL: ${url}, BODY: ${JSON.stringify(
      body
    )}, QUERY PARAMETERS: ${JSON.stringify(query)}`
  );
  next();
};

export const logError = (err, req, res, next) => {
  logger.error(
    `ERROR: ${err.code || 500} ${err.message || "Internal Server Error"}`
  );
  next(err);
};
