/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let line = [];
  const result = [];
  for (let y = 0; y < matrix.length; y++) {
    line = [];
    for (let x = 0; x < matrix[y].length; x++) {
      let countMines = 0;
      if (!matrix[y][x]) {
        for (let j = -1; j <= 1; j++) {
          for (let i = -1; i <= 1; i++) {
            if (y + j > -1 && x + i > -1) {
              if (y + j < matrix.length && x + i < matrix[y].length) {
                if (matrix[y + j][x + i]) countMines++;
              }
            }
          }
        }
        line[x] = countMines;
      }
    }
    result.push(line);
  }
  return result.map((k) => Array.from(k, (item) => (item === 0 ? 0 : item || 1)));
}

module.exports = minesweeper;
