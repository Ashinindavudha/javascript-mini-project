const numbers = [1, 2, 3, 2, 1, 3, 3, 4, 5, 6];
const nums = numbers.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});
console.log(nums);
//output
//[ 1, 2, 3, 4, 5, 6 ]
