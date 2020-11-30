const tail = require('../tail');
const assertEqual = require('../assertEqual');

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