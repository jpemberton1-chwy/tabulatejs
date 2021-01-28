import types, { Types } from "./types";

class TestA {}

class TestB {}

describe('typesafe', () => {
  const cases = [
    ['1', '2', Types.STRING],
    [1, 2, Types.NUMBER],
    [[], [], Types.ARRAY],
    [{}, {}, Types.OBJECT],
    [new TestA(), new TestA(), Types.OBJECT],
  ];

  const throwCases = [
    ['1', 1, false],
    ['1', null, false],
    ['1', undefined, false],
    ['1', 1n, false],
    ['1', {}, false],
    ['1', [], false],
    ['1', Symbol.for('1'), false],
    ['1', jest.fn(), false],
    [1, 2n, false],
    [1, null, false],
    [1, undefined, false],
    [1, {}, false],
    [1, [], false],
    [1, Symbol.for(1), false],
    [1, jest.fn(), false],
    [[], 1n, false],
    [[], {}, false],
    [[], Symbol.for('1'), false],
    [[], null, false],
    [[], undefined, false],
    [{}, 1, false],
    [{}, 1n, false],
    [{}, Symbol.for('1'), false],
    [{}, null, false],
    [{}, undefined, false],
    [{}, jest.fn(), false],
    [{}, new TestA(), false],
    [new TestA(), new TestB(), false],
    [new TestA(), null, false],
    [new TestA(), undefined, false],
    [new TestA(), jest.fn(), false],
  ];

  const typeString = variable => variable === null
    ? 'null'
    : Array.isArray(variable)
    ? 'array'
    : typeof variable;

  cases.forEach(([a, b, result]) => {
    test(`it should correctly compare ${typeString(a)} to ${typeString(b)}`, () => {
      expect(types(a, b)).toBe(result);
    });
  });

  throwCases.forEach(([a, b]) => {
    test(`it should throw an exception if comparing ${typeString(a)} to ${typeString(b)}`, () => {
      expect(() => types(a, b)).toThrow();
    });
  });
});
