import express from "express";
import BoardController from "./board.controller.js";

const router = express.Router();

router.get("/", BoardController.getAll);
router.get("/:id", BoardController.getOne);
router.post("/", BoardController.create);
router.put("/:id", BoardController.update);
router.delete("/:id", BoardController.delete);

export default router;
