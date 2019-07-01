# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@aidanmattrick/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: compares two arrays and returns if their values are equal
* `assertEqual(acutal, expected`: compares two values and returns if they are equal
* `assertObjectsEqual(obj1, obj2)`: compares two objects and returns if their keys and values are equal
* `countLetters(str)`: receives a string and returns the frequency of each character used in the string
* `countOnly(key, obj)`: takes in an object and returns the number of times that a given key occurs
* `eqArrays(array1, array2)`: takes in two arrays and returns if their values are equal
* `eqObjects(obj1, obj2)`: compares two objects and returns if their keys and values are equal
* `findKeys(obj, callback)`: takes in an object and returns the first key for which the callback returns a truthy value
* `findKeyByValue(obj, callback)`: takes in an object and returns the first key for which the callback returns a truthy value
* `flatten(array)`: takes in a nested array and returns a single array with list of values
* `head(array)`: takes in an array and returns the first element of that array
* `letterPositions(str)`: takes in a string and returns an object that displays each character used and the number of times it was used as key-value pairs
* `map(array)`: takes in an array and a callback and returns a new array with each element having been manipulated according to the callback function
* `middle(array)`: takes in an array and returns the middle element of that array. If there is an even number of elements, it returns the two middle values
* `tail(array)`: takes in a array and returns a new array indentical to the original array besides removing the first element
* `takeUntil(array, callback)`: takes in an array and returns a new array that copies the values of the original array with the callback function determining the endpoint of the returned array
* `without(array1, array2)`: takes in two arrays and removes all the elements in array1 that also occur in array2 before returning a copy of array1 
