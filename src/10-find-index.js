/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(/* array, value */) {
  throw new Error('Not implemented');
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] === value) {
  //     return i;
  //   }
  // }
  // return false;
}

// function cachingDecorator(func) {
//   const cache = new Map();

//   return function(x, y) {
//     if (cache.has(x, y)) {
//       return cache.get(x, y);
//     }

//     const result = func(x, y);

//     cache.set(x, y, result);
//     return result;
//   };
// }

// findIndex = cachingDecorator(findIndex);

module.exports = findIndex;
