const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let result = {};
  for (let item of str) {
    //console.log(item);
    if (item === " "){
      continue;
    }
    if(result[item]) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  }
  return result;
}

console.log(countLetters("lighthouse in the house"));
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }