import employees from "./__mock__/employees";
import csv from "./csv";

describe("csv", () => {
  test("it should separate lines by newline", () => {
    expect(csv(employees).split('\n')).toHaveLength(4);
  });

  test("it should separate properties by comma except the last", () => {
    const lines = csv(employees).split('\n');
    expect(lines[0]).toEqual("4500,2");
  });
});
