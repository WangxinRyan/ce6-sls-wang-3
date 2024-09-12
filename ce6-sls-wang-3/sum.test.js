const { sum, substract, multiply } = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('2 - 1 to equal 1', () => {
    expect(substract(2, 1)).toBe(1);
});

test('2 * 1 to equal 2', () => {
    expect(multiply(2, 1)).toBe(2);
});

test('1 / 2 to equal 0.5', () => {
    expect(sum(1, 2)).toBe(0.5);
});
