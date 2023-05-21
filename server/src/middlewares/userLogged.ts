import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


export interface TokenData {
  email: string,
  iat: number,
  exp: number,
  sub: string
};


export function userLogged(req: Request, res: Response, next: NextFunction) {


  const rawToken = req.cookies['jwt']

  if (!rawToken)
    throw new Error("Usuario nao esta logado");

  const token = rawToken.replace('Bearer ', '');

  const decoded = verify(token, (process.env.PASSWORD_HASH || "default"));

  req.token = decoded as TokenData;

  return next();

}