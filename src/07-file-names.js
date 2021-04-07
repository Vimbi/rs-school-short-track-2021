/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(/* arr */) {
  throw new Error('Not implemented');
  // const newArr = [];
  // let n = 0;

  // function check(x) {
  //   n++;
  //   if (!newArr.includes(x)) {
  //     newArr.push(x);
  //   } else {
  //     check(`${x}(${n})`);
  //   }
  //   n = 0;
  // }

  // arr.forEach((element) => {
  //   check(element);
  // });

  // return newArr;
}

module.exports = renameFiles;
