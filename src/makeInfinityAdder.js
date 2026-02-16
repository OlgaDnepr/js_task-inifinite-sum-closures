'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(...args) {
    if (args.length > 0) {
      sum += args.reduce((summ, x) => summ + x, 0);

      return adder;
    }

    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }
  };
}

module.exports = makeInfinityAdder;
