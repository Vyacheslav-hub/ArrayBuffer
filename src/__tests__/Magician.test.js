import Magician from '../Magician';

describe('Magician attack calculations', () => {
  test.each([
    [1, false, 100],
    [2, false, 90],
    [3, false, 80],
    [4, false, 70],
    [5, false, 60],

    [2, true, 85],
    [3, true, 72.1],
    [4, true, 60],
    [5, true, 48.4],
  ])('Magician attack at distance %i, stoned: %s', (distance, stoned, expected) => {
    const magician = new Magician(100);
    magician.distance = distance;
    magician.stoned = stoned;
    expect(magician.attack).toBe(expected);
  });

  test('Magician getters and setters', () => {
    const magician = new Magician(100);
    magician.attack = 120;
    magician.distance = 3;
    magician.stoned = true;

    expect(magician.attackValue).toBe(120);
    expect(magician.distance).toBe(3);
    expect(magician.stoned).toBe(true);
  });

  test('Magician throws error on invalid distance', () => {
    const magician = new Magician(100);
    expect(() => {
      magician.distance = 0;
    }).toThrow('Расстояние должно быть не менее 1');
  });

  test('Magician attack does not drop below zero', () => {
    const magician = new Magician(1);
    magician.distance = 10;
    magician.stoned = true;
    expect(magician.attack).toBe(0);
  });
});
