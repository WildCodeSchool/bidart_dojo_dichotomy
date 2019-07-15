const assert = require("assert");
const searchMin = require("./dichotomy");

assert.deepStrictEqual(
    searchMin([5, 40, 1, -3, 14, 30, -15, 80, 74, -20, -99]),
    -99,
    "Incorrect function : searchMin ([5, 40, 1, -3, 14, 30, -15, 80, 74, -20, -99]) not return -99"
  );