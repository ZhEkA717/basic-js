const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexArr = [];
  let sortArr = [];
  arr.forEach((item,i)=>{
    if(item===-1){
      indexArr.push(i);
    }else{
      sortArr.push(item);
    }
  })

  let sortAsceding = sortArr.sort((a,b)=>a-b);

  indexArr.forEach(item=>{
    sortAsceding.splice(item,0,-1);
  })

  return sortAsceding;
}

module.exports = {
  sortByHeight
};
