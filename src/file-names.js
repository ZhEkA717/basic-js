const {
  NotImplementedError
} = require('../extensions/index.js');

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
function renameFiles(names) {
  const hesh = {};
  const res = [];
  const symbols = ['', "(1)", "(1)(1)"];
  let index = 0;

  for (let i = 3; i < names.length; i++) {
    symbols.push(`(${i - 1})`);
  }

  for (let i = 0; i < names.length; i++) {
    let el = names[i];
    if (el in hesh) {
      for (let i = 0; i < symbols.length; i++) {
        let changeSymbol = el + symbols[i];
        if (!(changeSymbol in hesh)) {
          hesh[changeSymbol] = index++;
          break;
        }
      }
    } else {
      hesh[el] = index++;
    }
  }

  names.forEach((item,i)=>{
    for(let k in hesh){
      if(i===hesh[k]){
        res.push(k);
      }
    }
  })

  return res;  
}

module.exports = {
  renameFiles
};
