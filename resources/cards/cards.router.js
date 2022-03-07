import express from "express";
import CardsController from "./cards.controller.js";

const router = express.Router({ mergeParams: true });

router.get("/", CardsController.getAll);
router.get("/:id", CardsController.getOne);
router.post("/", CardsController.create);
router.put("/:id", CardsController.update);
router.delete("/:id", CardsController.delete);

export default router;
