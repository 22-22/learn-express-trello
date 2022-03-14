import Board from "../resources/boards/board.model.js";
import Card from "../resources/cards/cards.model.js";

const DB = {
  boards: [],
  cards: [],
  users: [
    {
      name: "Lynn Tomm",
      userId: "111",
      isAdmin: true,
    },
    {
      name: "Jot Lu",
      userId: "222",
      isAdmin: false,
    },
  ],
};

const start = () => {
  DB.boards.push(
    new Board({
      name: "first",
      color: "blue",
      description: "plants board",
      createAt: "02.03",
    }),
    new Board({
      name: "second",
      color: "green",
      description: "pets board",
      createAt: "01.03",
    }),
    new Board({
      name: "third",
      color: "orange",
      description: "self board",
      createAt: "04.03",
    })
  );

  const firstBoardId = DB.boards[0].id;
  const secondBoardId = DB.boards[1].id;

  DB.cards.push(
    new Card(firstBoardId, {
      name: "plants",
      description: "water plants",
      createAt: "02.03",
      estimate: "15 min",
      status: "todo",
      dueDate: "03.03",
      labels: ["red", "blue"],
    }),
    new Card(firstBoardId, {
      name: "flowers",
      description: "water flowers",
      createAt: "03.03",
      estimate: "20 min",
      status: "todo",
      dueDate: "04.03",
    }),
    new Card(secondBoardId, {
      name: "cat",
      description: "feed the cat",
      createAt: "02.03",
      estimate: "10 min",
      status: "done",
      dueDate: "03.03",
    })
  );
};

start();

export default DB;
