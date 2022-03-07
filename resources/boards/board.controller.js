import BoardService from "./board.service.js";

class BoardController {
  getAll(req, res) {
    try {
      const boards = BoardService.getAll();
      res.json(boards);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  getOne(req, res) {
    try {
      const { id } = req.params;
      const board = BoardService.getOne(id);
      res.json(board);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  create(req, res) {
    try {
      const newBoard = BoardService.create(req.body);
      res.json(newBoard);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  update(req, res) {
    try {
      const { id } = req.params;
      const updatedBoard = BoardService.update(id, req.body);
      res.json({
        message: `The board #${id} has been updated`,
        content: updatedBoard,
      });
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
  delete(req, res) {
    try {
      const { id } = req.params;
      const deletedBoard = BoardService.delete(id);
      res.json({
        message: `The board #${id} has been deleted`,
        content: deletedBoard,
      });
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

export default new BoardController();
