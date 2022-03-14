import { v4 as uuidv4 } from "uuid";

class Card {
  constructor(boardId, card) {
    this.id = uuidv4();
    this.boardId = boardId;
    this.name = card.name;
    this.description = card.description;
    this.createAt = card.createAt;
    this.estimate = card.estimate;
    this.status = card.status;
    this.dueDate = card.dueDate;
    this.labels = card.labels;
  }
}

export default Card;
