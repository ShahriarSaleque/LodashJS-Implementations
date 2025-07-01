export default function fromPairs<T>(
  pairs: Array<[string | number, T]>,
): Record<string | number, T> {
  let obj: any = {}; 

  pairs.forEach((item) => {
      obj[String(item[0])] = item[1];
  }); 

  return obj; 

}


// Another approrach 
export default function fromPairs(pairs) {
  return Object.fromEntries(pairs);
}