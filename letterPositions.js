const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
     if (arr1[i] !== arr2[i]){
       return false;
     }
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    //console.log("i", i);
    //console.log("sentence[i]", sentence[i]);
    if(sentence[i] !== " ") {
      if(results[sentence[i]]){
        results[sentence[i]].push(i);   //.push because we have obj of arrays
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);