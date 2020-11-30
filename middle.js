const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");


const middle = function(arr) {
  //return middle
  let result = [];
  
  if (arr.length <= 2) {
    return result;
  }

  let midEven = arr[Math.floor(arr.length / 2)];
  let midOdd = arr[Math.floor((arr.length - 1) / 2)];
  if (arr.length % 2 === 0) {
    result.push(midOdd, midEven);
  } else if (arr.length % 2 !== 0) {
    result.push(midOdd);
  }
  return result;
};


module.exports = middle;