const letters = ["a", "b", "c", "d", "e"];

let count = {};

letters.forEach((item) => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
});

console.log(count);

//output

// { a: 1, b: 1, c: 1, d: 1, e: 1 }
