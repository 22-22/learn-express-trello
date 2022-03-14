import Joi from "joi";

const cardsSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  description: Joi.string(),
  createAt: Joi.string(),
  estimate: Joi.string(),
  status: Joi.string().valid("todo", "inprogress", "complete"),
  dueDate: Joi.string(),
  labels: Joi.array().items(Joi.string()),
});

export default cardsSchema;
