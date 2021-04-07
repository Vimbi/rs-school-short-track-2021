/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  const arrResults = [];
  for (let i = 0; i < arr.length; i++) {
    const arrTemp = arr.concat();
    arrTemp.splice(i, 1);
    arrResults.push(arrTemp);
  }
  return Math.max(...arrResults.map((x) => Number(x.join(''))));
}

module.exports = deleteDigit;
