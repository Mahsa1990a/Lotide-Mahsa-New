const eqObjects = require('./eqObjects');

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

module.exports = assertObjectsEqual;