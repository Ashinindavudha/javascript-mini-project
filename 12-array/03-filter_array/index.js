const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter(isEven);

function isEven(value) {
  return value % 2 === 0;
}
console.log(even); //output [ 2, 4, 6 ]
/*
(method) Array<number>.filter<S>(predicate: (value: number, index: number, array: number[]) => value is S, thisArg?: any): S[] (+1 overload)
Returns the elements of an array that meet the condition specified in a callback function.

@param predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
*/
