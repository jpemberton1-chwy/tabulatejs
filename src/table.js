import sort from "./sort";
import csv from "./csv";
import xml from "./xml";
import toJson from "./json";

export default function tabulate(json, primaryKey = null) {
  const _json = [...json];

  let _primaryKey = [];

  const fn = () => {};

  fn.toArray = () => [..._json];

  fn.to = {
    array() {
      return fn.toArray();
    },
    json() {
      return toJson(_json);
    },
    csv() {
      return csv(_json);
    },
    xml() {
      return xml(_json);
    },
  };

  fn.setPrimaryKey = primaryKey => {
    switch (typeof primaryKey) {
      case 'function':
        _primaryKey = primaryKey();
        break;
      case 'boolean':
      case 'bigint':
      case 'string':
      case 'number':
      case 'symbol':
        _primaryKey = [primaryKey];
        break;
      case 'undefined':
      case 'object':
        if (primaryKey) _primaryKey = primaryKey;
        break;
      default:
        break;
    }
  };

  fn.getPrimaryKey = () => [..._primaryKey];

  fn.sort = (keys = _primaryKey) => tabulate(
    sort(keys, [..._json]),
    _primaryKey
  );

  return fn;
}
