import { v4 as uuidv4 } from "uuid";

class Board {
  constructor(board) {
    this.id = uuidv4();
    this.name = board.name;
    this.color = board.color;
    this.description = board.description;
    this.createAt = board.createAt;
  }
}

export default Board;
