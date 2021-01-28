import employees from "./__mock__/employees";
import json from "./json";

describe("json", () => {
  test("it should format json", () => {
    expect(json(employees)).toEqual(JSON.stringify(employees));
  });
});
