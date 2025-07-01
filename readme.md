# LodashJS-Implementations

A collection of JavaScript utility functions inspired by [Lodash](https://lodash.com/), implemented from scratch for learning and reference purposes.

## Table of Contents
- [Overview](#overview)
- [Implemented Functions](#implemented-functions)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Overview
This project contains custom implementations of popular Lodash functions. Each function is implemented in its own file for clarity and modularity.

## Implemented Functions
- `chunk` - Splits an array into groups the length of size.
- `clamp` - Clamps number within the inclusive lower and upper bounds.
- `compact` - Creates an array with all falsey values removed.
- `countBy` - Creates an object composed of keys generated from the results of running each element of collection through iteratee.
- `curried` - Returns a curried version of a function.
- `debounce` - Creates a debounced function that delays invoking func until after wait milliseconds.
- `dropRightWhile` - Creates a slice of array excluding elements dropped from the end.
- `dropWhile` - Creates a slice of array excluding elements dropped from the beginning.
- `fill` - Fills elements of array with value from start up to, but not including, end.
- `uniqueArray` - Returns a new array with only unique values.

## Usage
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd LodashJS-Implementations
   ```
2. Import the desired function into your project:
   ```js
   import chunk from './chunk';
   import clamp from './clamp';
   import fill from './fill';
   import curried from './curried';
   import debounce from './debounce';
   import dropRightWhile from './dropRightWhile';
   import dropWhile from './dropWhile';
   import uniqueArray from './uniqueArray';
   // ...etc
   ```

## Examples
```js
import chunk from './chunk';
console.log(chunk([1,2,3,4,5], 2)); // [[1,2],[3,4],[5]]

import clamp from './clamp';
console.log(clamp(10, -5, 5)); // 5

import compact from './compact';
console.log(compact([0, 1, false, 2, '', 3])); // [1,2,3]

import countBy from './countBy';
console.log(countBy([6.1, 4.2, 6.3], Math.floor)); // { '4': 1, '6': 2 }

import fill from './fill';
console.log(fill([1, 2, 3, 4], '*', 1, 3)); // [1, '*', '*', 4]

import curried from './curried';
const add = (a, b, c) => a + b + c;
const curriedAdd = curried(add);
console.log(curriedAdd(1)(2)(3)); // 6

import debounce from './debounce';
const log = debounce(() => console.log('Debounced!'), 200);
log();

import dropRightWhile from './dropRightWhile';
console.log(dropRightWhile([1, 2, 3, 4], n => n > 2)); // [1, 2]

import dropWhile from './dropWhile';
console.log(dropWhile([1, 2, 3, 4], n => n < 3)); // [3, 4]

import uniqueArray from './uniqueArray';
console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for new functions or improvements.

## License
MIT License
