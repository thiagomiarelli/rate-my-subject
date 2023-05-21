import { TokenData } from "../../middlewares/userLogged";

export { };

declare global {
  namespace Express {
    interface Request {
      token: TokenData;
    }
  }
}

