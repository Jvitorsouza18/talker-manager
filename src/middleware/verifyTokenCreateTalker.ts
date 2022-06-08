import { NextFunction, Request, Response } from "express";
import Joi from "joi";

function verifyTokenCreateTalker(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;
  const schema = Joi.object({
    authorization: Joi.string().length(16).required().messages({
      "any.required": "Token não encontrado",
      "string.length": "Token inválido",
    }),
  });

  const { error } = schema.validate({ authorization });
  if (error) {
    return response.status(401).json({ message: error.message });
  }

  return next();
}

export { verifyTokenCreateTalker };
