const {
  NotImplementedError
} = require('../extensions/index.js');

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
  let strN = n.toString();
  let arr = [];

  for(let i=0; i<strN.length;i++){
    
  }

 

  console.log(arr);
}

deleteDigit(1534);

module.exports = {
  deleteDigit
};
