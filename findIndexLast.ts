export default function findLastIndex<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
  fromIndex = array.length - 1,
): number {
  const len = array.length; 
  let index = -1; 

  fromIndex = fromIndex < 0 ? Math.max(fromIndex + len, 0) : Math.min(fromIndex, len); 

  for(let i = fromIndex; i >= 0; i--) {
      const val = predicate(array[i], i, array);

      if(val) {
         index = i;
         break;
      }
  };

  return index; 
}