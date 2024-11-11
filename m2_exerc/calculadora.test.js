const { calcular } = require('./calculadora');

test('calcula a expressão corretamente', () => {
    expect(calcular("2+2")).toBe(4);
    expect(calcular("10/2")).toBe(5);
    expect(calcular("5*3")).toBe(15);
});

test('retorna "Erro" para expressões inválidas', () => {
    expect(calcular("2++2")).toBe("Erro"); 
    expect(calcular("10//2")).toBe("Erro"); 
});

test('retorna uma string vazia para entrada vazia', () => {
    expect(calcular("")).toBe("");
});
