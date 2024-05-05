const assert = require('assert');
const { sum_to_n_a, sum_to_n_b, sum_to_n_c } = require('./problem1.js');

// Test cases
try {
    assert.strictEqual(sum_to_n_a(-9), 0, 'sum should be 0');
    assert.strictEqual(sum_to_n_a(-1), 0, 'sum should be 0');
    assert.strictEqual(sum_to_n_a(0), 0, 'sum should be 0');
    assert.strictEqual(sum_to_n_a(1), 1, 'sum should be 1');
    assert.strictEqual(sum_to_n_a(2), 3, 'sum should be 3');
    assert.strictEqual(sum_to_n_a(9), 45, 'sum should be 45');
    console.log('sum_to_n_a tests passed!');
} catch (error) {
    console.error('sum_to_n_a tests failed:', error.message);
}

try {
    assert.strictEqual(sum_to_n_b(-9), 0, 'sum should be 0');
    assert.strictEqual(sum_to_n_b(-1), 0, 'sum should be 0');
    assert.strictEqual(sum_to_n_b(0), 0, 'sum should be 0');
    assert.strictEqual(sum_to_n_b(1), 1, 'sum should be 1');
    assert.strictEqual(sum_to_n_b(2), 3, 'sum should be 3');
    assert.strictEqual(sum_to_n_b(9), 45, 'sum should be 45');
    console.log('sum_to_n_b tests passed!');
} catch (error) {
    console.error('sum_to_n_b tests failed:', error.message);
}

try {
    assert.strictEqual(sum_to_n_c(-9), 0, 'sum should be 0');
    assert.strictEqual(sum_to_n_c(-1), 0, 'sum should be 0');
    assert.strictEqual(sum_to_n_c(0), 0, 'sum should be 0');
    assert.strictEqual(sum_to_n_c(1), 1, 'sum should be 1');
    assert.strictEqual(sum_to_n_c(2), 3, 'sum should be 3');
    assert.strictEqual(sum_to_n_c(9), 45, 'sum should be 45');
    console.log('sum_to_n_c tests passed!');
} catch (error) {
    console.error('sum_to_n_c tests failed:', error.message);
}
