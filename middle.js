const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]){
      return false;
    }
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

console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [2, 3]);