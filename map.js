//const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  // temporary code:
  //console.log('array: ', array);
  //console.log('callback: ', callback);

  const results = [];
  for (let item of array) {
    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    //console.log('---');
    results.push(callback(item));
  }
  return results;
}

const result1 = map(words, word => word[0]);
console.log(result1);

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(["Hi", "Hello", "bye"], x => x.length), [2]);
assertArraysEqual(map([1, 2, 3], x => x * 2), [2, 4, 6]);


module.exports = map;

