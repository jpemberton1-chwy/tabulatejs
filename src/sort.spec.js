import employees from "./__mock__/employees";
import bySalary from "./__mock__/employees.salary";
import byLevel from "./__mock__/employees.level";
import sort from "./sort";

describe("sort", () => {
  test("it should correctly sort by number", () => {
    expect(sort(['salary'], employees)).toEqual(bySalary);
  });

  test("it should correctly sort by string", () => {
    expect(sort(['level'], employees)).toEqual(byLevel);
  });
});
