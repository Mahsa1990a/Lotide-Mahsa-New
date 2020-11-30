# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mahsa1990a/lotide`

**Require it:**

`const _ = require('@mahsa1990a/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: Asserts whether two arrays are equal

* `function2(assertEqual)`: Asserts whether two primitive values are equal

* `function3(asserObjectEqual)`: Asserts whether two objects are equal

* `function4(countLetters)`: Returns an object where each unique character encountered in a given string is a key and the value for that property should be the number of occurrences for that character

* `function5(countOnly)`: Given an array and an object, it will return an object containing counts of everything that the input object listed and was contained in the array as well

* `function6(eqArrays)`: Compares the data of two arrays to check if they are equal to each other

* `function7(eqObjects)`: Compares the data of two objects to check if they are equal to each other

* `function8(findKey)`: Takes an object and a callback and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined

* `function9(findKeyByValue)`: Takes an object and a value and returns the first key which contains the given value. If no key with that given value is found, it returns undefined.

* `function10(head)`: It returns first index in array

* `function11(letterPositions)`: Returns an object containing each characters as keys and as values all the indices in the string where each character is found.

* `function12(map)`: Returns a new array based on the results of the callback function.

* `function13(middle)`: It returns middle number in array

* `function14(tail)`: It returns array without index0 means first value

* `function15(takeUntil)`: Returns a "slice of the array with elements taken from the beginning." It should keep going until the callback returns a truthy value.

* `function16(without)`: Takes an array and an itemsToRemove array. It should return a new array with only the elements from source that are not present in the itemsToRemove array.


