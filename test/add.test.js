import {add} from '../src/add.js';
import assert from 'assert';

describe('given an esm module', () => {
    it('should add two numbers', () => {
        assert.strictEqual(add(3, 5), 8);
    });

    it('should fail', () => {
        assert.strictEqual(add(3, 5), 9);
    });
})
