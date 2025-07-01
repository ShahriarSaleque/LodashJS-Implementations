export default function findIndex<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
  fromIndex: number = 0,
): number {
  const len = array.length; 
  let index = -1; 

  fromIndex = fromIndex < 0 ? Math.max(fromIndex + len, 0) : fromIndex; 

  for(let i = fromIndex; i < len; i++) {
      const val = predicate(array[i], i, array);

      if(val) {
         index = i;
         break;
      }
  };

  return index; 
}