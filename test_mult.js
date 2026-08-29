const { multiplicacao } = require('./app');

test('testa a multiplicação', () => {
    expect(multiplicacao(5, 3)).toBe(15);
});