const numbers = [1, 2, 3, 4, 5];

const numberDouble = numbers.map(multiply);
function multiply(value, index, arr) {
  return value * index;
}

console.log(numberDouble); // output [ 0, 2, 6, 12, 20 ]
