import DB from "../../db/db.js";
import Card from "./cards.model.js";
import cardsSchema from "./cards.schema.js";
import validateData from "../../helpers/validationHelper.js";
import ErrorHandler from "../../helpers/error.js";

class CardService {
  getAll(boardId) {
    return DB.cards.filter((card) => card.boardId === boardId);
  }
  getOne(id) {
    const card = DB.cards.find((card) => card.id === id);
    if (!card) {
      throw new ErrorHandler(404, "Card not found.");
    }
    return card;
  }
  create(boardId, card) {
    const { error } = validateData(cardsSchema, card);
    if (error) {
      throw new ErrorHandler(400, error.message);
    } else {
      const newCard = new Card(boardId, card);
      DB.cards.push(newCard);
      return newCard;
    }
  }
  update(id, card) {
    const idx = DB.cards.findIndex((card) => card.id === id);
    if (idx === -1) {
      throw new ErrorHandler(404, "Card not found.");
    }
    const { error } = validateData(cardsSchema, card);
    if (error) {
      throw new ErrorHandler(400, error.message);
    } else {
      const oldCard = DB.cards[idx];
      const updatedCard = {
        id: oldCard.id,
        boardId: oldCard.boardId,
        ...card,
      };
      DB.cards[idx] = updatedCard;
      return updatedCard;
    }
  }
  delete(id) {
    const idx = DB.cards.findIndex((card) => card.id === id);
    if (idx === -1) {
      throw new ErrorHandler(404, "Card not found.");
    }
    const deletedCards = DB.cards.splice(idx, 1);
    return deletedCards[0];
  }
}

export default new CardService();
