const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Ao passar "count" retorna 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Se não passar parâmetro, deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Ao passar um parâmetro diferente de uma string, deve retornar "Parâmetro inválido, é necessário uma string"', () => {
    const erro = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(4)).toBe(erro);
    expect(handlerElephants(true)).toBe(erro);
    expect(handlerElephants(false)).toBe(erro);
    expect(handlerElephants({})).toBe(erro);
    expect(handlerElephants([1, 2, 3])).toBe(erro);
  });

  it('Ao passar "averageAge", deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('Ao passar "availability" deve retornar um array com 4 itens', () => {
    expect(handlerElephants('availability')).toHaveLength(4);
  });

  it('Ao passar "popularity" deve retornar 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('Ao passar "names" deve retornar um array com 4 itens', () => {
    expect(handlerElephants('names')).toHaveLength(4);
  });

  it('Ao passar um parâmetro diferente de "count", "names", "averageAge", "location", "popularity" e "availability", deve retornar null', () => {
    expect(handlerElephants('batata')).toBeNull();
    expect(handlerElephants('pão')).toBeNull();
    expect(handlerElephants('cachorro')).toBeNull();
    expect(handlerElephants('horário')).toBeNull();
  });
});
