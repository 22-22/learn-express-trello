import DB from "../../db/db.js";
import Card from "./cards.model.js";

class CardService {
  getAll(boardId) {
    const cardsPerBoard = DB.cards.filter((card) => card.boardId === boardId);
    return cardsPerBoard;
  }
  getOne(id) {
    const card = DB.cards.find((card) => card.id === id);
    if (!card) {
      throw new Error("Card not found.");
    }
    return card;
  }
  create(boardId, card) {
    const newCard = new Card(boardId, card);
    DB.cards.push(newCard);
    return newCard;
  }
  update(id, card) {
    const idx = DB.cards.findIndex((card) => card.id === id);
    if (idx === -1) {
      throw new Error("Card not found.");
    }
    const oldCard = DB.cards[idx];
    const updatedCard = { id: oldCard.id, boardId: oldCard.boardId, ...card };
    DB.cards[idx] = updatedCard;
    return updatedCard;
  }
  delete(id) {
    const idx = DB.cards.findIndex((card) => card.id === id);
    if (idx === -1) {
      throw new Error("Card not found.");
    }
    const deletedCards = DB.cards.splice(idx, 1);
    return deletedCards[0];
  }
}

export default new CardService();
