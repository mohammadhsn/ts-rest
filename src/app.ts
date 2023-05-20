import express, { Request, Response } from "express";
import { Email } from "./types/Email";

export const app = express();

app.use(express.json())

app.get('/', (req: Request, res: Response): void => {
    const e: Email = new Email('foo@bar.com');
    res.send(`Hello: ${e.value}`);
});
