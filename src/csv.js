export default function csv(json) {
  let out = "";
  for (let i = 0; i < json.length; i += 1) {
    const row = json[i];
    const keys = Object.keys(row);
    for (let j = 0; j < keys.length; j += 1) {
      out += row[keys[j]];
      if (j < keys.length - 1)
        out += ","
    }
    if (i < json.length - 1)
      out += "\n";
  }
  return out;
}
