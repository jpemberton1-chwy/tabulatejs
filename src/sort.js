import types, { Types } from "./types";

export default function sort(keys = [], json) {
  const key = keys.pop();

  if (!key) return json;

  const _json = [...json];

  _json.sort((obj1, obj2) => {
    const a = obj1[key];
    const b = obj2[key];

    let type;
    try {
      type = types(a, b);
    } catch (e) {
      throw new Error("uncaught sorting exception");
    }

    switch(type) {
      case Types.BIGINT:
      case Types.STRING:
      case Types.NUMBER:
        return Math.sign(a - b);
      default:
        return 0;
    }
  });

  return sort(keys, _json);
}
