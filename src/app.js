import "dotenv/config";
import express from "express";
import helmet from "helmet";
import { logInfo, logError } from "./helpers/logger.js";
import handleErrors from "./middleware/errorHandlingMiddleware.js";
import boardRouter from "./resources/boards/board.router.js";
import cardRouter from "./resources/cards/cards.router.js";

const app = express();

app.use(helmet());

app.use(express.json());

app.use(logInfo);

app.use("/boards", boardRouter);
boardRouter.use("/:boardId/cards", cardRouter);
app.use("*", (req, res) => res.send("This page does not exist."));

app.use(logError);
app.use(handleErrors);

app.listen(process.env.PORT, () =>
  console.log(`Server started listening on port ${process.env.PORT}`)
);
