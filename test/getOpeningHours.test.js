const getOpeningHours = require('../src/getOpeningHours');

const hours = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

const closed = 'The zoo is closed';
const open = 'The zoo is open';

describe('Testes da função getOpeningHours', () => {
  it('Não passando parâmetros, deve retornar um objeto com os horários e dias da semana', () => {
    expect(typeof getOpeningHours()).toBe('object');
    expect(getOpeningHours()).toEqual(hours);
  });

  it('Para os parâmetros Monday e 09:00-AM, deve retornar "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(closed);
  });

  it('Para os parâmetros Tuesday e 09:00-AM, deve retornar "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(open);
  });

  it('Para os parâmetros Wednesday e 09:00-PM, deve retornar "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(closed);
  });

  it('Para os parâmetros Wed e 09:00-AM, deve lançar o erro "The day must be valid. Example: Monday"', () => {
    expect(() => getOpeningHours('Wed', '09:00-AM')).toThrow(new Error('The day must be valid. Example: Monday'));
  });

  it('Para os parâmetros Monday e nove horas, deve lançar um erro "The hour should represent a number"', () => {
    expect(() => getOpeningHours('Monday', 'nove horas')).toThrow(new Error('The hour should represent a number'));
  });

  it('Para os parâmetros Friday e 09:00-ZM, deve lançar um erro "The abbreviation must be Am or PM"', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });

  it('Para os parâmetros Friday e 28:00-AM, deve lançar um erro "The abbreviation must be Am or PM"', () => {
    expect(() => getOpeningHours('Friday', '28:00-aM')).toThrow(new Error('The hour must be between 0 and 12'));
  });

  it('Para os parâmetros Friday e 09:78-AM, deve lançar um erro "The abbreviation must be Am or PM"', () => {
    expect(() => getOpeningHours('Friday', '09:78-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });
});
