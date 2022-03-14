import DB from "../../db/db.js";
import Board from "./board.model.js";
import boardSchema from "./board.schema.js";
import validateData from "../../helpers/validationHelper.js";
import ErrorHandler from "../../helpers/error.js";

class BoardService {
  getAll() {
    return DB.boards;
  }
  getOne(id) {
    const board = DB.boards.find((board) => board.id === id);
    if (!board) {
      throw new ErrorHandler(404, "Board not found.");
    }
    return board;
  }
  create(board) {
    const { error } = validateData(boardSchema, board);
    if (error) {
      throw new ErrorHandler(400, error.message);
    } else {
      const newBoard = new Board(board);
      DB.boards.push(newBoard);
      return newBoard;
    }
  }
  update(id, board) {
    const idx = DB.boards.findIndex((board) => board.id === id);
    if (idx === -1) {
      throw new ErrorHandler(404, "Board not found.");
    }
    const { error } = validateData(boardSchema, board);
    if (error) {
      throw new ErrorHandler(400, error.message);
    } else {
      const updatedBoard = { id, ...board };
      DB.boards[idx] = updatedBoard;
      return updatedBoard;
    }
  }
  delete(id) {
    const idx = DB.boards.findIndex((board) => board.id === id);
    DB.cards = DB.cards.filter((card) => card.boardId !== id);
    if (idx === -1) {
      throw new ErrorHandler(404, "Board not found.");
    }
    const deletedBoard = DB.boards.splice(idx, 1);
    return deletedBoard[0];
  }
}

export default new BoardService();
