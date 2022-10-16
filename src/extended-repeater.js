const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str,options) {
  let {repeatTimes,separator,addition,additionRepeatTimes,additionSeparator}=options;
  
  if(!separator){
    separator="+";
  }
  if(!additionSeparator){
    additionSeparator="|";
  }
  if(!repeatTimes){
    repeatTimes=1;
  }
  if(!additionRepeatTimes){
    additionRepeatTimes=1;
  }
  if(addition===undefined){
    addition="";
  }

  if(typeof(str) !== "string"){
    str = `${str}`;
  }
  if(typeof(addition) !== "string"){
    addition = `${addition}`;
  }

  let strAddition ="",
    arrAddition = [];
  for(let i=0;i<additionRepeatTimes;i++){
    arrAddition.push(addition);
  }
  strAddition = arrAddition.join(additionSeparator);

  let strSeparator = "",
    arrSeparator = [];
  for(let i=0;i<repeatTimes;i++){
    arrSeparator.push(str+strAddition);
  }
  strSeparator = arrSeparator.join(separator);

  return strSeparator;
}

module.exports = {
  repeater
};
