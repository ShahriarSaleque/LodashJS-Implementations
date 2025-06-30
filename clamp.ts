// Clamp a number between a lower and upper bound
// If the value is less than the lower bound, return the lower bound
// If the value is greater than the upper bound, return the upper bound
// If the value is within the bounds, return the value
// This is a simple implementation of the lodash `clamp` function.

export default function clamp(
  value: number,
  lower: number,
  upper: number,
): number {
   if(value >= lower && value <= upper) {
      return value; 
   }
   else if (value < lower) {
    return lower
   }
   return upper;
}