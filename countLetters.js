const assertEqual = require('./assertEqual');

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



//countLetters("lighthouse in the house")
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

// assertEqual(countLetters("lighthouse in the house"), {
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
// });
console.log(countLetters("LHL"))
assertEqual(countLetters("LHL"), { L: 2, H: 1 })

module.exports = countLetters;