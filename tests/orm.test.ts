import {expect, describe, test} from "@jest/globals";
import {UserEntity} from "../src/orm/entities/UserEntity";
import {appDataSource} from "../src/orm/appDataSource";

beforeAll(async () => {
    await appDataSource.initialize();
});

beforeEach(async () => {
    await appDataSource.runMigrations();
});

afterEach(async () => {
    await appDataSource.dropDatabase();
});

afterAll(async () => {
    await appDataSource.dropDatabase();
    await appDataSource.destroy();
});

describe('some orm playground', () => {
    test('create entity', async () => {
        const user: UserEntity = new UserEntity();
        user.email = 'foo@bar.com';
        await user.save();
        expect(user.id).not.toBeUndefined();
    });
});
