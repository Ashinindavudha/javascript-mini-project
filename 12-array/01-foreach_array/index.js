const numbers = [1, 2, 3, 4, 5];
//numbers.forEach(consoleItem);

//function consoleItem(item, index, arr) {
//console.log(item); //1 2 3 4 5;
//console.log("a[" + index + "]" + item);
/*
  out put
a[0]1
a[1]2
a[2]3
a[3]4
a[4]5
*/
//}
//array function
numbers.forEach((item, index, arr) => {
  //console.log("a[" + index + "]" + item);
  console.log(arr);

  /*
 [ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]

  */
});

/*forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void
A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.


Performs the specified action for each element in an array.*/
