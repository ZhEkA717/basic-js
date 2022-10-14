const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let resArr = [];
  let arr = n.split("-");
  let startArrLength = arr.length;
  let count = 0;

  arr.forEach(item => {
    resArr.push(parseInt(item, 16));
  })

  resArr.forEach(item => {
    if (Number.isInteger(item) && item >= 0 && item <= 255) {
      count++;
    }
  })

  return startArrLength===count?true:false;
}

isMAC48Address("00-1B-63-84-45-E6")

module.exports = {
  isMAC48Address
};
