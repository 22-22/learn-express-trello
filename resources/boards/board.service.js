import DB from "../../db/db.js";
import Board from "./board.model.js";

class BoardService {
  getAll() {
    return DB.boards;
  }
  getOne(id) {
    const board = DB.boards.find((board) => board.id === id);
    if (!board) {
      throw new Error("Board not found.");
    }
    return board;
  }
  create(board) {
    const newBoard = new Board(board);
    DB.boards.push(newBoard);
    return newBoard;
  }
  update(id, board) {
    const idx = DB.boards.findIndex((board) => board.id === id);
    if (idx === -1) {
      throw new Error("Board not found.");
    }
    const updatedBoard = { id, ...board };
    DB.boards[idx] = updatedBoard;
    return updatedBoard;
  }
  delete(id) {
    const idx = DB.boards.findIndex((board) => board.id === id);
    DB.cards = DB.cards.filter((card) => card.boardId !== id);
    if (idx === -1) {
      throw new Error("Board not found.");
    }
    const deletedBoard = DB.boards.splice(idx, 1);
    return deletedBoard;
  }
}

export default new BoardService();
