import employees from "./__mock__/employees";
import xml from "./xml";

describe("xml", () => {
  test("it should encode a document", () => {
    expect(xml(employees)).toEqual(`<?xml version="1.0" encoding="UTF-8"?>
<document>
  <object>
    <salary>
      <type>number</type>
      <value>4500</value>
    </salary>
    <level>
      <type>string</type>
      <value>2</value>
    </level>
  </object>
  <object>
    <salary>
      <type>number</type>
      <value>4650</value>
    </salary>
    <level>
      <type>string</type>
      <value>2</value>
    </level>
  </object>
  <object>
    <salary>
      <type>number</type>
      <value>2300</value>
    </salary>
    <level>
      <type>string</type>
      <value>3</value>
    </level>
  </object>
  <object>
    <salary>
      <type>number</type>
      <value>9900</value>
    </salary>
    <level>
      <type>string</type>
      <value>3</value>
    </level>
  </object>
</document>`);
  });
});
