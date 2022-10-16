const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isReverse=true){
    this.noReverse = isReverse;
    this.h = {
      A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,
      P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25
    }
    this.res = [];
    this.resStr ="";
  }

  createResStr(str,key,smbl){
    let m=26,
        count = 0,
        arrStr = [],
        arrKey = [];

    this.res = [];
    for(let i=0; i<str.length; i++){
      let elStr = str[i].toUpperCase(),
        elKey = key[count].toUpperCase();

      if(elStr in this.h){
        arrStr.push(this.h[elStr]);
        if(count === key.length-1){
          arrKey.push(this.h[key[count].toUpperCase()]);
          count=0;
        }else{
          arrKey.push(this.h[elKey]);
          count++;
        }

      }else{
        arrStr.push(elStr);
        arrKey.push(elStr);
      }
    }

    for(let i=0; i<str.length;i++){
      let arrStrEl = arrStr,
        arrKeyEl = arrKey;
      if(!Number.isInteger(arrStrEl[i])){
        this.res.push(arrStrEl[i]);
      }else{
        if(smbl==="+"){
          this.res.push((arrKeyEl[i]+arrStrEl[i])%m);
        }else if(smbl==="-"){
          if(arrStrEl[i]-arrKeyEl[i] < 0){
            this.res.push((m+arrStrEl[i]-arrKeyEl[i])%m);
          }else{
            this.res.push((arrStrEl[i]-arrKeyEl[i])%m);
          }
        }
      }
    }

    this.resStr ="";
    this.res.forEach(item=>{
      for(let k in this.h){
        let obj = this.h;
          if(item===obj[k]){
            this.resStr+=`${k}`;
          }
      }
      if(!Number.isInteger(item)){
        this.resStr+=`${item}`;
      }
    });

    if(this.noReverse){
      return this.resStr;
    }else{
      return this.resStr.split("").reverse().join("");
    }
  }

  encrypt(str,key) {
    this.resStr ="";
    try{
      return this.createResStr(str,key,"+");
    }catch{
      throw new Error("Incorrect arguments!");
    }    
  }

  decrypt(str,key) {
    this.resStr ="";
    try{
      return this.createResStr(str,key,"-");
    }catch{
      throw new Error("Incorrect arguments!");
    }   
  }
}

module.exports = {
  VigenereCipheringMachine
};
