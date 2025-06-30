// Lodash currying implementation
// This is a simple implementation of the lodash `curry` function.
// It takes a function as an argument and returns a new function that can be called with fewer arguments.
// The returned function will keep returning a new function until all the arguments are provided.
// Once all the arguments are provided, it will call the original function with those arguments.
// If the original function is called with the correct number of arguments, it will return the result.
// If the original function is called with fewer arguments, it will return a new function that can
// be called with the remaining arguments.
export default function curry(func: Function): Function {
  let nums = []; 

  return function curried(this, ...args) {
        nums.push(...args); 
        if(func.length === nums.length) {
          const res = func.apply(this, nums);
          nums = []; 
          return res;
        } else {
           return curried.bind(this;)
        }
  } 
}