const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length === Object.keys(object2).length) {
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  console.log(`Example label: ${inspect(actual)}`);
  if (!eqObjects(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: "hi"}, {a: "hi"});
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });