'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  return function adder(...args) {
    if (args.length > 0) {
      sum += args.reduce((summ, x) => summ + x, 0);
  function adder(addedNumber) {
    if (addedNumber !== undefined) {
      sum += addedNumber;

      return adder;
    }

    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }
  };
    const result = sum;

    sum = 0;

    return result;
  }

  return adder;
}

module.exports = makeAdder;
