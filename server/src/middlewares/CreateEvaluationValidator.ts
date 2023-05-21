import { body } from 'express-validator';
import { validate } from './validate';

function createEvaluationValidator() {
  return [
    body('rating').isInt({ min: 1, max: 5 }),
    body('difficulty').isInt({ min: 1, max: 5 }),
    body('recommended').isBoolean(),
    body('evaluation_method').isString(),
    body('comment').isString(),
    body('professor').isString().notEmpty(),
    body('subject').isString().notEmpty(),
  ]
}

export function studentValidate() {
  const validation = createEvaluationValidator();
  return validate(validation);
}

