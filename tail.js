//const assertEqual = require('./assertEqual');

const tail = function(arr) {
  return arr.slice(1); //remove [0]
};

module.exports = tail;