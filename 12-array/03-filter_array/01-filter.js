const people = [
  {
    name: "Ashin",
    age: 34,
  },
  {
    name: "Indavudha",
    age: 18,
  },
  {
    name: "Mg Myo Khing",
    age: 14,
  },
];

const adults = people.filter((person) => person.age >= 18);
console.log(adults);
//output
//[ { name: 'Ashin', age: 34 }, { name: 'Indavudha', age: 18 } ]
