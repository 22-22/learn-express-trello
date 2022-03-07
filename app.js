import express from "express";
import helmet from "helmet";
import boardRouter from "./resources/boards/board.router.js";
import cardRouter from "./resources/cards/cards.router.js";

const PORT = 3001;

const app = express();

app.use(helmet());

app.use(express.json());

app.use("/boards", boardRouter);
boardRouter.use("/:boardId/cards", cardRouter);

app.use("*", (req, res) => res.send("This page does not exist."));

app.listen(PORT, () => console.log(`Server started listening on port ${PORT}`));
