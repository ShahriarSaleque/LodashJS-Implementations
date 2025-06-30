export default function countBy<T>(
  array: Array<T>,
  iteratee: (value: T) => number | string,
): Record<string, number> {
  const res: any = {}; 

  array.forEach((item) => {
      const key = iteratee(item); 

      if(!res[key]) {
          res[key] = 1
      } else {
         res[key] = res[key] + 1;  
      }
  }); 

  return res; 
}