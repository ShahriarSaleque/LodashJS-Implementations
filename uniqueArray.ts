export default function uniqueArray<T extends ReadonlyArray<unknown>>(
  array: T,
): Array<T[number]> {
   const set = new Set(array); 

   return Array.from(set);
}