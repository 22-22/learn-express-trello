import CardService from "./cards.service.js";

class CardController {
  getAll(req, res, next) {
    try {
      const { boardId } = req.params;
      const cardsPerBoard = CardService.getAll(boardId);
      res.json(cardsPerBoard);
    } catch (err) {
      next(err);
    }
  }
  getOne(req, res, next) {
    try {
      const { id } = req.params;
      const card = CardService.getOne(id);
      res.json(card);
    } catch (err) {
      next(err);
    }
  }
  create(req, res, next) {
    try {
      const { boardId } = req.params;
      const newCard = CardService.create(boardId, req.body);
      res.json({
        message: "The card has been created",
        content: newCard,
      });
    } catch (err) {
      next(err);
    }
  }
  update(req, res, next) {
    try {
      const { id } = req.params;
      const updatedCard = CardService.update(id, req.body);
      res.json({
        message: `The card #${id} has been updated`,
        content: updatedCard,
      });
    } catch (err) {
      next(err);
    }
  }
  delete(req, res, next) {
    try {
      const { id } = req.params;
      const deletedCard = CardService.delete(id);
      res.json({
        message: `The card #${id} has been deleted`,
        content: deletedCard,
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new CardController();
