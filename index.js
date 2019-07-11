const assert = require("assert");

const arrayOfNumbers = [-10, 8, -20, 3, -500, -1, 2, 11, -100];

function dichotomie(array) {
  let arrayFirstPart = array.slice(0, array.length / 2);
  let arraySecondPart = array.slice(array.length / 2, array.length);

  if (arrayFirstPart.length > 1) {
    arrayFirstPart = dichotomie(arrayFirstPart);
  }
  if (arraySecondPart.length > 1) {
    arraySecondPart = dichotomie(arraySecondPart);
  }
  if (arrayFirstPart.length === 1 && arraySecondPart.length === 1) {
    if (arrayFirstPart[0] > arraySecondPart[0]) {
      return arraySecondPart;
    }
    return arrayFirstPart;
  }
}

console.log("TCL: dichotomie -> dichotomie", dichotomie(arrayOfNumbers));

// tests

assert.deepEqual(
  dichotomie([-10, 8, -20, 3, -500, -1, 2, 11, -100]),
  [-500],
  "dichotomie([-10, 8, -20, 3, -500, -1, 2, 11, -100]) do not return [-500], function is broken !!"
);

assert.deepEqual(
  dichotomie([-10, 10, -20, 3, -100, -1, 2, 0, -100]),
  [-100],
  "dichotomie([-10, 10, -20, 3, -100, -1, 2, 0, -100]) do not return [-100], function is broken !!"
);
