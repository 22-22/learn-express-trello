import express from "express";
import CardsController from "./cards.controller.js";
import checkRole from "../../middleware/roleCheckingMiddleware.js";

const router = express.Router({ mergeParams: true });

router.get("/", CardsController.getAll);

router.get("/:id", CardsController.getOne);

// router.post("/", checkRole, CardsController.create);
router.post("/", checkRole);
router.post("/", CardsController.create);

router.put("/:id", checkRole);
router.put("/:id", CardsController.update);

router.delete("/:id", checkRole);
router.delete("/:id", CardsController.delete);

export default router;
