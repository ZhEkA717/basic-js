const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domain) {
  let hesh = {};
  let count = 1;

  function addHesh(el){
    if(el in hesh){
      hesh[el]++;
    }else{
      hesh[el]=count;
    }
  }

  for(let i = 0; i<domain.length; i++){
    let el = domain[i];
    let arrayEl =  el.split(".").reverse();
    for(let j=0; j<arrayEl.length; j++){
      if(j===0){
        addHesh(`.${arrayEl.slice(j).join(".")}`);
      }else{
        addHesh(`.${arrayEl.slice(0,j).join(".")}`);
      }
    }
  }

  return hesh;
}
  
module.exports = {
  getDNSStats
};
