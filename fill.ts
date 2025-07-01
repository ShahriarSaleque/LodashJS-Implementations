export default function fill<T>(
  array: Array<T>,
  value: any,
  start: number = 0,
  end: number = array.length,
): Array<T> {
  const array_length = array.length;

  function transform(index: number): number {
    let transformed_index: number = index + array_length;
    if (transformed_index < 0) {
      transformed_index = 0;
    } else if (transformed_index > array_length) {
      transformed_index = array_length;
    }
    return transformed_index;
  }

  if (start < 0) {
    start = transform(start);
  }

  if (end < 0) {
    end = transform(end);
  }

  if(end > array.length) {
    end = array.length; 
  }

  if (end < start) {
    return array;
  }

  for(let i = start ; i < end; i++) {
      array[i] = value;
  }

  return array; 
}

// Optimized approach 
export default function fill<T>(
  array: Array<T>,
  value: any,
  start: number = 0,
  end: number = array.length,
): Array<T> {
  const len = array.length;

  start = start < 0 ? Math.max(start + len, 0) : Math.min(start, len);
  end = end < 0 ? Math.max(end + len, 0) : Math.min(end, len);

  for (let i = start; i < end; i++) {
    array[i] = value;
  }

  return array;
}

