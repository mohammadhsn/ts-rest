import {describe, expect, test} from '@jest/globals';
import {Email} from "../src/types/Email";

describe('validate email', (): void => {
    test('with invalid email', async () => {
        expect(() => new Email('foo')).toThrow(Error);
    });
});
