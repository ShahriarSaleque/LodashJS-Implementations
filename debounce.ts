export default function debounce(func: Function, wait: number): Function {
   let timerID: number; 
   return function (this: any, ...args: any) {
      clearTimeout(timerID);
      timerID = setTimeout(() => {
        func.apply(this, args);
      }, wait);
   }
}