export const Types = {
  ARRAY: Symbol.for('ARRAY'),
  OBJECT: Symbol.for('OBJECT'),
  STRING: Symbol.for('STRING'),
  NUMBER: Symbol.for('NUMBER'),
  BIGINT: Symbol.for('BIGINT'),
  UNDEFINED: Symbol.for('UNDEFINED'),
  NULL: Symbol.for('NULL'),
  BOOLEAN: Symbol.for('BOOLEAN'),
};

export default function types(a, b) {
  const type = { a: typeof a, b: typeof b };

  if (Array.isArray(a) && Array.isArray(b))
    return Types.ARRAY;

  const trivialCases = ['number', 'string', 'boolean', 'bigint', 'undefined', 'symbol'];

  for (let i = 0; i < trivialCases.length; i += 1)
    if (type.a === trivialCases[i] && type.b === trivialCases[i])
      return Types[type.a.toUpperCase()];

  if (type.a === 'object' && type.b === 'object') {
    if (a === null && b === null) return Types.NULL;
    if (a.constructor && b.constructor && a.constructor === b.constructor) return Types.OBJECT;
  }

  throw new Error("objects are not same type");
}
