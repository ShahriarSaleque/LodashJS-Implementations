// Lodash DropRightWhile Implementation
// This function removes elements from the end of an array while the predicate returns true.
// It is a simple implementation of the lodash `dropRightWhile` function.
// It takes an array and a predicate function as arguments and returns a new array with the elements removed.
// If the predicate returns false for an element, it stops removing elements and returns the new array.
// If the array is empty, it returns an empty array.
export default function dropRightWhile<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
): Array<T> {
   const arr_length = array.length - 1; 
   const result = [...array]; 

   for(let i = arr_length; i >=0; i--) {
       const item = array[i]; 
       const value = predicate(item, i, array);
       if(!value) {
          break;
       } 
       else {
          result.splice(i, 1);
       } 
   }

   return result;
}