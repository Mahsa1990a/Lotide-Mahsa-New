const head               = require('./head');
const tail               = require('./tail');
const middle             = require('./middle');
const assertEqual        = require('./assertEqual');
const eqArrays           = require('./eqArrays');
const assertArraysEqual  = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters       = require('./countLetters');
const countOnly          = require('./countOnly');
const eqObjects          = require('./eqObjects');
const findKey            = require('./findKey');
const findKeyByValue     = require('./findKeyByValue');
const letterPositions    = require('./letterPositions');
const map                = require('./map');
const takeUntil          = require('./takeUntil');
const without            = require('./without');

// module.exports = {
//   head:   head,
//   tail:   tail,
//   middle: middle
// };

//ES6, shorter object syntax : Property Value Shorthand
module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  eqArrays,
  assertArraysEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without
};