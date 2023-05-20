import {expect, test, describe} from "@jest/globals";
import supertest from "supertest";
import { app } from '../src/app';

describe('some super testing', (): void => {
    test('send get http request to /', async () => {
        const res = await supertest(app).get('/').send();
        expect(res.status).toBe(200);
    });
});
