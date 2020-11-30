const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {

  for (let key in object) {
    //console.log(key); //"Blue Hill" , ...
    //console.log(object[key]); //{ stars: 1 } , ...
    if(callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

let find = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
assertEqual(find, "noma");

let find1 = findKey({
  "a": {num: "hi"}, 
  "b": {num: "hello"}, 
  "c": {num: "bye"}
}, x => x.num === "hi");
assertEqual(find1, "a");

module.exports = findKey;