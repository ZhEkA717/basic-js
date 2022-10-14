const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 

 * 
 */
function getSeason(date) {

  if(!arguments.length){
    return "Unable to determine the time of year!";
  }
  
  if(!(Date.parse(date))){
    throw new Error("Invalid date!");
  }

  try{
    let fakeDate = date;
    JSON.stringify(fakeDate);
  }catch(e){
    throw new Error("Invalid date!");
  }

  const month = date.getMonth();

  if([11,0,1].indexOf(month)!=-1){
    return "winter";
  }else if([2,3,4].indexOf(month)!=-1){
    return "spring";
  }else if([5,6,7].indexOf(month)!=-1){
    return "summer";
  }else if([8,9,10].indexOf(month)!=-1){
    return "autumn";
  } 
  
}

module.exports = {
  getSeason
};
