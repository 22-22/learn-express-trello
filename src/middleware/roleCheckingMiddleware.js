import ErrorHandler from "../helpers/error.js";
import DB from "../db/db.js";

const checkRole = (req, res, next) => {
  const { userId } = req.query;
  const user = DB.users.find((user) => user.userId === userId);
  if (user) {
    if (user.isAdmin) {
      next();
    } else {
      throw new ErrorHandler(403, "You don't have enough rights.");
    }
  } else {
    throw new ErrorHandler(404, "User not found.");
  }
};

export default checkRole;
