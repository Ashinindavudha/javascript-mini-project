const numbers = [1, 2, 3, 4, 5];

const numberDouble = numbers.map(double);
function double(value, index, arr) {
  return value * 2;
}

console.log(numberDouble); // output [ 2, 4, 6, 8, 10 ]
