import tabulatejs from "./table";
import employees from "./__mock__/employees";
import bySalary from "./__mock__/employees.salary";

describe('table', () => {
  const table = tabulatejs(employees);

  test("it should allow setting a primary key", () => {
    table.setPrimaryKey('salary');

    expect(table.getPrimaryKey()).toEqual(['salary']);
  });

  test("it should return a new object with each sort", () => {
    expect(table.sort(['salary']) === table).toBe(false);
  });

  describe("with primary key", () => {
    test("it should sort by primary key", () => {
      table.setPrimaryKey('salary');

      expect(table.sort().toArray()).toEqual(bySalary);
    });
  });

  describe("with formatters", () => {
    test("it should output correct format", () => {
      expect(table.to.json()).toBe(JSON.stringify(employees));
    });
  });
});
