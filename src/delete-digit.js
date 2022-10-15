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

  function delteNum(str,n){
    let arr = str.split("");
    
    for(let i=0; i<arr.length; i++){
      if(i===n){
        arr.splice(i,1);
      }
    }
    return arr.join("");
  }

  for(let i=0; i<strN.length;i++){
    arr.push(delteNum(strN,i));
  }

  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
