const { subtracao } = require('./app');

test('testa a subtração', () => {
    expect(subtracao(5, 3)).toBe(2);
});