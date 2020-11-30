const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let Obj1KeyArr = Object.keys(object1);
  let Obj2KeyArr = Object.keys(object2);

  if (Obj1KeyArr.length === Obj2KeyArr.length) {
    for(let key in object1) {
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if(!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]){
        return false;
      }
    }
    return true;
  }
  return false;
};


const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
console.log(eqObjects(ab,ba)); //true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

assertEqual(eqObjects(ab,ba), true);
assertEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

module.exports = eqObjects;