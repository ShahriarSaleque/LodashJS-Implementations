
// DIfferent from lodash's dropRightWhile, this implementation removes elements from the end of the array
// while the predicate returns true. It stops removing elements when the predicate returns false for an element
// and returns the new array. If the array is empty, it returns an empty array.
// This is a simple implementation of the lodash `dropRightWhile` function.
// It takes an array and a predicate function as arguments and returns a new array with the elements

// Not to do -> do not splice when value is true, instead shift the array
// because we are dropping elements from the start of the array

export default function dropWhile<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
): Array<T> {
  const arr_length = array.length - 1; 
  const result = [...array]; 

   for(let i = 0; i < array.length; i++) {
       const item = array[i]; 
       const value = predicate(item, i, array);
       if(value) {
          result.shift();
          
       } 
       else {
          break;
       } 
   }

   return result;
}

const x = dropWhile([1, 2, 3, 4, 5], (value, _index, _array) => value < 3)
console.log(x);