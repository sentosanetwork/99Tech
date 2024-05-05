const assert = require('assert');
const { sum_to_n_ver1, sum_to_n_ver2, sum_to_n_ver3 } = require('./problem1.js');

// Test cases
try {
    assert.strictEqual(sum_to_n_ver1(-9), 0, 'sum should be 0');
    assert.strictEqual(sum_to_n_ver1(-1), 0, 'sum should be 0');
    assert.strictEqual(sum_to_n_ver1(0), 0, 'sum should be 0');
    assert.strictEqual(sum_to_n_ver1(1), 1, 'sum should be 1');
    assert.strictEqual(sum_to_n_ver1(2), 3, 'sum should be 3');
    assert.strictEqual(sum_to_n_ver1(9), 45, 'sum should be 45');
    console.log('version1 tests passed!');
} catch (error) {
    console.error('version1 Test failed:', error.message);
}

try {
    assert.strictEqual(sum_to_n_ver2(-9), 0, 'sum should be 0');
    assert.strictEqual(sum_to_n_ver2(-1), 0, 'sum should be 0');
    assert.strictEqual(sum_to_n_ver2(0), 0, 'sum should be 0');
    assert.strictEqual(sum_to_n_ver2(1), 1, 'sum should be 1');
    assert.strictEqual(sum_to_n_ver2(2), 3, 'sum should be 3');
    assert.strictEqual(sum_to_n_ver2(9), 45, 'sum should be 45');
    console.log('version2 tests passed!');
} catch (error) {
    console.error('version2 Test failed:', error.message);
}

try {
    assert.strictEqual(sum_to_n_ver3(-9), 0, 'sum should be 0');
    assert.strictEqual(sum_to_n_ver3(-1), 0, 'sum should be 0');
    assert.strictEqual(sum_to_n_ver3(0), 0, 'sum should be 0');
    assert.strictEqual(sum_to_n_ver3(1), 1, 'sum should be 1');
    assert.strictEqual(sum_to_n_ver3(2), 3, 'sum should be 3');
    assert.strictEqual(sum_to_n_ver3(9), 45, 'sum should be 45');
    console.log('version3 tests passed!');
} catch (error) {
    console.error('version3 Test failed:', error.message);
}