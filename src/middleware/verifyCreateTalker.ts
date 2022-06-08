import { NextFunction, Request, Response } from "express";
import Joi from "joi";

function verifyCreateTalker(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { name, age, talk } = request.body;
  const schema = Joi.object({
    name: Joi.string().required().min(3).messages({
      "any.required": 'O campo "name" é obrigatório',
      "string.min": 'O "name" deve ter pelo menos 3 caracteres',
    }),
    age: Joi.number().required().greater(17).messages({
      "any.required": 'O campo "age" é obrigatório',
      "number.greater": "A pessoa palestrante deve ser maior de idade",
    }),
    talk: Joi.object({
      rate: Joi.number().min(1).max(5).required().messages({
        "number.min": 'O campo "rate" deve ser um inteiro de 1 à 5',
        "number.max": 'O campo "rate" deve ser um inteiro de 1 à 5',
        "any.required":
          'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
      }),
      watchedAt: Joi.string()
        .pattern(/^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/i)
        .required()
        .messages({
          "string.pattern.base":
            'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
          "string.required":
            'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
        }),
    })
      .required()
      .messages({
        "any.required":
          'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
      }),
  });

  const { error } = schema.validate({ name, age, talk });
  if (error) {
    return response.status(400).json({ message: error.message });
  }

  return next();
}

export { verifyCreateTalker };
