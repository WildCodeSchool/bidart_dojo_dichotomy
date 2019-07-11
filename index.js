const assert = require("assert");

const arrayOfNumbers = [-10, 8, -20, 3, -500, -100, 2, 11, -100, -2000];

function dichotomie(array) {
  let arrayFirstPart = array.slice(0, array.length / 2);
  let arrayLastPart = array.slice(array.length / 2, array.length);

  if (arrayFirstPart.length > 1) {
    arrayFirstPart = dichotomie(arrayFirstPart);
  }
  if (arrayLastPart.length > 1) {
    arrayLastPart = dichotomie(arrayLastPart);
  }

  return arrayFirstPart[0] > arrayLastPart[0] ? arrayLastPart : arrayFirstPart;
}

console.log("TCL: dichotomie -> dichotomie", dichotomie(arrayOfNumbers));

// tests

assert.deepEqual(
  dichotomie([-10, 8, -20, 3, -500, -1, 2, 11, -10000000000]),
  [-10000000000],
  "dichotomie([-10, 8, -20, 3, -500, -1, 2, 11, -10000000000]) do not return [-10000000000], function is broken !!"
);

assert.deepEqual(
  dichotomie([-10, 10, -20, 3, -100, -1, 2, 0, -100]),
  [-100],
  "dichotomie([-10, 10, -20, 3, -100, -1, 2, 0, -100]) do not return [-100], function is broken !!"
);
