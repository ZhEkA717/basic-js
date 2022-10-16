const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const res = [];
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let myArray = JSON.parse(JSON.stringify(arr));

  let length =myArray.length;

  if(myArray[0]==='--discard-prev' || myArray[0]==='--double-prev'){ 
    myArray[0]="delete";
  }else if(myArray[length-1]==='--discard-next' || myArray[length-1]==='--double-next'){
    myArray[length-1]="delete";
  }

  for(let i=0; i<myArray.length;i++){
      if(myArray[i]==='--discard-prev'){
        myArray[i-1] = "delete";
        myArray[i]="delete";
      }
      if(myArray[i]==='--discard-next'){
        myArray[i] = "delete";
        myArray[i+1]="delete";
      }
      if(myArray[i]==='--double-next'){
        myArray[i] = myArray[i+1];
      }
      if(myArray[i]==='--double-prev'){
        myArray[i] = myArray[i-1];
      }
  }


  myArray.forEach(item=>{
    if(item!=="delete"){
      res.push(item);
    }
  });

  return res;
}

console.log(transform(["--double-next",3]));

module.exports = {
  transform
};
