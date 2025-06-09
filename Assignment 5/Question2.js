const personsArray = [
  {
    name: "John",
    age: 26,
  },
  {
    name: "Aryan",
    age: 21,
  },
  {
    name: "Yash",
    age: 22,
  },
  {
    name: "Adarsh",
    age: 24,
  },
];

const sortArray = (personsArray) => {
  personsArray.sort((p1, p2) => {
    return p1.age - p2.age;
  });
};

sortArray(personsArray);

console.log(personsArray);
