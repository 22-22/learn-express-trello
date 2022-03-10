import CardService from "./cards.service.js";

class CardController {
  getAll(req, res) {
    try {
      const { boardId } = req.params;
      const cardsPerBoard = CardService.getAll(boardId);
      res.json(cardsPerBoard);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  getOne(req, res) {
    try {
      const { id } = req.params;
      const card = CardService.getOne(id);
      res.json(card);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  create(req, res) {
    try {
      const { userId } = req.query;
      const { boardId } = req.params;
      const newCard = CardService.create(boardId, req.body, userId);
      res.json(newCard);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  update(req, res) {
    try {
      const { userId } = req.query;
      const { id } = req.params;
      const updatedCard = CardService.update(id, req.body, userId);
      res.json(updatedCard);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  delete(req, res) {
    try {
      const { userId } = req.query;
      const { id } = req.params;
      const deletedCard = CardService.delete(id, userId);
      res.json(deletedCard);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

export default new CardController();
