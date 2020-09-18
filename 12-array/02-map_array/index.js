const numbers = [1, 2, 3, 4, 5];

numbers.map(double);
function double(value, index, arr) {
  return value * 2;
}

console.log(numbers); //output [ 1, 2, 3, 4, 5 ]

/*
(method) Array<number>.map<U>(callbackfn: (value: number, index: number, array: number[]) => U, thisArg?: any): U[]
Calls a defined callback function on each element of an array, and returns an array that contains the results.

@param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

*/
