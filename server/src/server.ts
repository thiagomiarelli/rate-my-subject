import cookies from "cookie-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";
import { router } from './routes';


dotenv.config();

const app = express();

app.use(cors(
  {
    origin: process.env.APP_URL,
    credentials: true,
  },
));


app.use(express.json());
app.use(cookies());
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message
    });
  }
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  });
})

app.get('/', (req: Request, res: Response) => {
  console.log("Isso e um test!");
  return res.json({
    text: "text",
    codigo: 1010
  });
})

app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Its alive on port ${process.env.BACKEND_PORT}`)
});