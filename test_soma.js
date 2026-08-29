const { soma } = require('./app');

test('testa a soma', () => {
    expect(soma(2, 3)).toBe(5);
});