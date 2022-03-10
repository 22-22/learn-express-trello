import DB from "../../db/db.js";
import Card from "./cards.model.js";
import cardsSchema from "./cards.schema.js";
import { validateData } from "../../helpers/helpers.js";
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
  create(boardId, card, userId) {
    const user = DB.users.find((user) => user.id === userId);
    if (user && user.isAdmin) {
      const { error } = validateData(cardsSchema, card);
      if (error) {
        throw new Error(error.message);
      } else {
        const newCard = new Card(boardId, card);
        DB.cards.push(newCard);
        return newCard;
      }
    } else {
      throw new Error("You don't have enough rights.");
    }
  }
  update(id, card, userId) {
    const user = DB.users.find((user) => user.id === userId);
    if (user && user.isAdmin) {
      const idx = DB.cards.findIndex((card) => card.id === id);
      if (idx === -1) {
        throw new Error("Card not found.");
      }
      const { error } = validateData(cardsSchema, card);
      if (error) {
        throw new Error(error.message);
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
    } else {
      throw new Error("You don't have enough rights.");
    }
  }
  delete(id, userId) {
    const user = DB.users.find((user) => user.id === userId);
    if (user && user.isAdmin) {
      const idx = DB.cards.findIndex((card) => card.id === id);
      if (idx === -1) {
        throw new Error("Card not found.");
      }
      const deletedCards = DB.cards.splice(idx, 1);
      return deletedCards[0];
    } else {
      throw new Error("You don't have enough rights.");
    }
  }
}

export default new CardService();
