import DB from "../../db/db.js";
import Board from "./board.model.js";
import boardSchema from "./boards.schema.js";
import { validateData } from "../../helpers/helpers.js";
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
  create(board, userId) {
    const user = DB.users.find((user) => user.id === userId);
    if (user && user.isAdmin) {
      const { error } = validateData(boardSchema, board);
      if (error) {
        throw new Error(error.message);
      } else {
        const newBoard = new Board(board);
        DB.boards.push(newBoard);
        return newBoard;
      }
    } else {
      throw new Error("You don't have enough rights.");
    }
  }
  update(id, board, userId) {
    const user = DB.users.find((user) => user.id === userId);
    if (user && user.isAdmin) {
      const idx = DB.boards.findIndex((board) => board.id === id);
      if (idx === -1) {
        throw new Error("Board not found.");
      }
      const { error } = validateData(boardSchema, board);
      if (error) {
        throw new Error(error.message);
      } else {
        const updatedBoard = { id, ...board };
        DB.boards[idx] = updatedBoard;
        return updatedBoard;
      }
    } else {
      throw new Error("You don't have enough rights.");
    }
  }
  delete(id, userId) {
    const user = DB.users.find((user) => user.id === userId);
    if (user && user.isAdmin) {
      const idx = DB.boards.findIndex((board) => board.id === id);
      DB.cards = DB.cards.filter((card) => card.boardId !== id);
      if (idx === -1) {
        throw new Error("Board not found.");
      }
      const deletedBoard = DB.boards.splice(idx, 1);
      return deletedBoard;
    } else {
      throw new Error("You don't have enough rights.");
    }
  }
}

export default new BoardService();
