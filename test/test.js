import sortByHealth from '../src/js/app';

test('sortByHealth(), basic test', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const result = sortByHealth(input);
  expect(result).toEqual(expected);
});

test('sortByHealth(), invalid argument test', () => {
  expect(sortByHealth("error")).toBe(undefined);
});