// function doubleIt(num) {
//   return num * 2;
// }

// const doubleIt = function myfun(num) {
//   return num * 2;
// };

//Using ES6 code can be written in one line

const doubleIt = (num) => num * 2;
//Multiple Parameter
const add = (x, y) => x + y;
//No parameter
const give5 = () => 5;
// Multiple Calculation
const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
};

const result = doubleIt(50);
const result2 = add(50, 70);
const result3 = give5();
const result4 = doMath(7, 5);
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
