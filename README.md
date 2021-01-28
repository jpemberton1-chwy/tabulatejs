# TabulateJS

A library to easily sort and export large datasets with Node or in the browser.

## Getting Started

Add `tabulatejs` to your dependencies:

```sh
npm install --save tabulatejs
```

or with Yarn:

```sh
yarn add tabulatejs
```

Then, import the library and pull in some JSON!

```js
import tabulate from "tabulatejs";

const table = tabulate(largeDataSet);
```

## Examples

All of the following examples assume you've got your data and imported `tabulatejs` like so:

```js
import tabulate from "tabulatejs";

const table = tabulate(employees);
```

### Sorting by a single property

```
table.sort('salary'); // returns a new table sorted by salary in ascending order
```

### Sorting by multiple properties

```
table.sort(['salary', 'name']); // returns a new table sorted by salary and then name in ascending order
```

### Exporting as a CSV

```
const contents = table.sort('salary').to.csv(); // returns the collection as a CSV formatted string
```

### Exporting as XML

```
const xml = table.sort('salary').to.xml(); // returns the collection as an XML document
```
