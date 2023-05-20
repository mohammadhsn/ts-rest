import express, {Express, Request, Response} from "express";
import { Email } from "./types/Email";

export const app: Express = express();

app.get('/', (req: Request, res: Response): void => {
    const e: Email = new Email('foo@bar.com');
    res.send(`Hello: ${e.value}`);
});
