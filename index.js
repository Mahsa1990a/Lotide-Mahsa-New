const head              = require('./head');
const tail              = require('./tail');
const middle            = require('./middle');
const assertEqual       = require('./assertEqual');
const eqArrays          = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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
  assertArraysEqual
};