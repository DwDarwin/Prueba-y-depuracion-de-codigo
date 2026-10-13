const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});


test('divide 10 / 2 debe dar igual a 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide -9 / 3 debe dar igual a -3', () => {
  expect(calculator.divide(-9, 3)).toBe(-3);
});

test('multiplicar 4 * 4 debe dar igual a 16', () => {
  expect(calculator.multiply(4, 4)).toBe(16);
});

test('multiplicar -5 * 2 debe dar igual a -10', () => {
  expect(calculator.multiply(-5, 2)).toBe(-10);
});

test('dividir entre cero  mensaje de error', () => { 
  expect(calculator.divide(10, 0)).toBe("no se puede realizar división por '0'.");
 });