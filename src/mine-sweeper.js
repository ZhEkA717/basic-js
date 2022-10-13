const {
  NotImplementedError
} = require('../extensions/index.js');

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
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res= [];
  const m = matrix;
  for(let i=0; i<m.length;i++){
    for(let j=0; j<m[i].length;j++){
      
    }
  }

  console.log(matrixWithZero);

}

matrix = [
  ["t", "f", "f"],
  ["f", "t", "f"],
  ["f", "f", "f"]
]

minesweeper(matrix);

module.exports = {
  minesweeper
};
