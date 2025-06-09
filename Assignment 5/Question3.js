//3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const personsArray = [
  {
    name: "John",
    age: 26,
    id:1
  },
  {
    name: "Aryan",
    age: 21,
    id:2
  },
  {
    name: "Yash",
    age: 22,
    id:3
  },
  {
    name: "Adarsh",
    age: 24,
    id:4
  },
];

const removeIdFromObjects=(personsArray)=>{
    for(const person of personsArray){
        delete person.id;
    }
}

removeIdFromObjects(personsArray)
console.log(personsArray)