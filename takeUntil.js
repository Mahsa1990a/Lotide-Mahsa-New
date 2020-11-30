//const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    //console.log("item", item);
    if(callback(item)) {
      break; //we need to stop loop till it is true
    }
    result.push(item);
  }
  //result.push(item); item is not defined
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);  //[ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); //[ 'I\'ve', 'been', 'to', 'Hollywood' ]

assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);

module.exports = takeUntil;
