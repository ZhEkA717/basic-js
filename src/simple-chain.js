const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  value: "",
  length: 0,
  getLength() {
    return this.length;
  },
  addLink(value = "") {
    if (this.length === 0) {
      this.value = this.value + `( ${value} )`;
    } else {
      this.value = this.value + `~~( ${value} )`;
    }
    this.length++;
    return this;
  },
  removeLink(position) {

    if (position <= 0 || position > this.length ||
      !Number.isInteger(position) || typeof (position) === "string") {
      this.length = 0;
      this.value = "";
      throw new Error("You can't remove incorrect link!");
    }

    let arr = this.value.split("~~");
    this.value = arr.splice(position - 1, 1);
    this.value = arr.join("~~");
    this.length--;
    return this;

  },
  reverseChain() {
    this.value = this.value.split("~~").reverse().join("~~");
    return this;
  },
  finishChain() {
    let str = this.value;
    this.value = "";
    this.length = 0;
    return str;
  }
};

module.exports = {
  chainMaker
};
