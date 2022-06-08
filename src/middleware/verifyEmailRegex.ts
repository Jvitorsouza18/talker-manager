import { NextFunction, Request, Response } from "express";
import Joi from "joi";

function verifyEmail(request: Request, response: Response, next: NextFunction) {
  const { email, password } = request.body;
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      "string.email": 'O "email" deve ter o formato "email@email.com"',
      "any.required": 'O campo "email" é obrigatório',
    }),
    password: Joi.string().min(6).required().messages({
      "string.min": 'O "password" deve ter pelo menos 6 caracteres',
      "any.required": 'O campo "password" é obrigatório',
    }),
  });

  const { error } = schema.validate({ email, password });

  if (error) {
    return response.status(400).json({ message: error.message });
  }

  return next();
}

export { verifyEmail };
