import express from "express";
import checkRole from "../../middleware/roleCheckingMiddleware.js";
import BoardController from "./board.controller.js";

const router = express.Router();

router.get("/", BoardController.getAll);

router.get("/:id", BoardController.getOne);

router.post("/", checkRole);
router.post("/", BoardController.create);

router.put("/:id", checkRole);
router.put("/:id", BoardController.update);

router.delete("/:id", checkRole);
router.delete("/:id", BoardController.delete);

export default router;
