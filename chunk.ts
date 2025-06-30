// Chunck an array into smaller arrays of a specified size.
// This is a simple implementation of the lodash `chunk` function.
// It takes an array and a size as arguments and returns a new array containing the chunks.
// If the size is not specified, it defaults to 1.
// If the array is empty, it returns an empty array.
export default function chunk<T>(array: Array<T>, size = 1): Array<Array<T>> {
  if(array.length === 0) {
    return []
  }

  let index = 0
  const chunked_arr = []; 

  while(index < array.length) {
    chunked_arr.push(array.slice(index, index + size));
    index = index + size; 
  }

  return chunked_arr;
}