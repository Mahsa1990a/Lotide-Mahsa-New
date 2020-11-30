const head = require('../head');
const assertEqual = require('../assertEqual');

//console.log(head([5,6,7]));
//console.log(head(["Hello", "Lighthouse", "Labs"]));

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);