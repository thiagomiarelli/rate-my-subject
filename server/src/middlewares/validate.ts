import { NextFunction, Request, Response } from 'express';
import { ValidationChain, validationResult } from 'express-validator';

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};

// export function validate() {
//   console.log("h1")
//   return async (req: Request, res: Response, next: NextFunction) => {
//     console.log("h2")
//     const errors = validationResult(req);
//     if (errors.isEmpty()) next();
//     return res.status(400).json({ errors: errors.array() });
//   };
// }