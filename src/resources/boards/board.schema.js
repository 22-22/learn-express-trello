import Joi from "joi";

const boardSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  color: Joi.string().max(15),
  description: Joi.string(),
  createAt: Joi.string(),
});

export default boardSchema;
