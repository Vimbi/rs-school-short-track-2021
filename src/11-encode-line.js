/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let count = 1;
  let symbol = '';
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (symbol === arr[i]) {
      count++;
    } else {
      if (count > 1) {
        result.push(`${count}${symbol}`);
      } else {
        result.push(`${symbol}`);
      }
      count = 1;
      symbol = arr[i];
    }
  }
  if (count > 1) {
    result.push(`${count}${symbol}`);
  } else {
    result.push(`${symbol}`);
  }
  return result.join('');
}

module.exports = encodeLine;
