import BoardService from "./board.service.js";

class BoardController {
  getAll(req, res, next) {
    try {
      const boards = BoardService.getAll();
      res.json(boards);
    } catch (err) {
      next(err);
    }
  }
  getOne(req, res, next) {
    try {
      const { id } = req.params;
      const board = BoardService.getOne(id);
      res.json(board);
    } catch (err) {
      next(err);
    }
  }
  create(req, res, next) {
    try {
      const newBoard = BoardService.create(req.body);
      res.json({
        message: "The board has been created",
        content: newBoard,
      });
    } catch (err) {
      next(err);
    }
  }
  update(req, res, next) {
    try {
      const { id } = req.params;
      const updatedBoard = BoardService.update(id, req.body);
      res.json({
        message: `The board #${id} has been updated`,
        content: updatedBoard,
      });
    } catch (err) {
      next(err);
    }
  }
  delete(req, res, next) {
    try {
      const { id } = req.params;
      const deletedBoard = BoardService.delete(id);
      res.json({
        message: `The board #${id} has been deleted`,
        content: deletedBoard,
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new BoardController();
