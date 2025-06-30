// Compact an array by removing all falsy values
// This is a simple implementation of the lodash `compact` function.
// It takes an array and returns a new array containing only the truthy values.
// Falsy values include: null, undefined, false, 0, and empty strings.

export default function compact<T>(
  array: Array<T | null | undefined | false | 0 | ''>,
): Array<T> {
  const res = []; 

  array.forEach(item => {
    if(item) {
      res.push(item)
    }
  }); 

  return res; 
}