const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1); //remove [0]
};

//for testing can not do : [1, 2, 3] === [1, 2, 3] // => false
//so :
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

//Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
//console.log(tail(words))
assertEqual(words.length, 3); // original array should still have 3 elements!

const w = tail(["a"]);
assertEqual(w.length, 0);

const a = tail([""]);
assertEqual(a.length, 0);