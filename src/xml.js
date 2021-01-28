function addSpaces(indentWidth, indentSize = 2) {
  let out = "";
  for (let i = 0; i < indentWidth; i += 1)
    for (let j = 0; j < indentSize; j += 1)
      out += ' ';
  return out;
}
function encodeObjectToXml(obj, indentWidth = 0) {
  if (obj === null) {
    return '';
  }

  const keys = Object.keys(obj);

  let out = "";

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const value = obj[key];
    out += addSpaces(indentWidth, 2);
    out += `<${key}>\n`;
    out += addSpaces(indentWidth + 1, 2);
    switch (typeof value) {
      case 'object':
        if (value !== null) {
          out += '<type>object</type>\n';
          out += addSpaces(indentWidth + 1, 2);
          out += `<value>\n${encodeObjectToXml(value, indentWidth + 1)}\n`;
          out += `</value>\n`;
          break;
        }
      default:
        out += `<type>${typeof value}</type>\n`;
        out += addSpaces(indentWidth + 1, 2);
        out += `<value>${value}</value>\n`;
        break;
    }
    out += addSpaces(indentWidth, 2);
    out += `</${key}>\n`;
  }

  return out;
}

export default function xml(json) {
  let out = `<?xml version="1.0" encoding="UTF-8"?>\n<document>\n`;

  for (let i = 0; i < json.length; i += 1) {
    out += addSpaces(1, 2);
    out += '<object>\n';
    out += encodeObjectToXml(json[i], 2);
    out += addSpaces(1, 2);
    out += '</object>\n';
  }

  out += '</document>';

  return out;
}
