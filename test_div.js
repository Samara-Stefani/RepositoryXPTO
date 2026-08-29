const { divisao } = require('./app');

test('testa a divisão', () => {
    expect(divisao(6, 3)).toBe(2);
});

test('não permite divisão por zero', () => {
    expect(() => divisao(6, 0)).toThrow(
        'O denominador não pode ser zero.'
    );
});