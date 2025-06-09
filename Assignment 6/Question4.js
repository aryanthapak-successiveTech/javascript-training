//Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`.
//The class should also have a method called `fullName` that returns the person's full name.
//Additionally, the class should have a method called `averageAge`
//that takes in an array of `Person` objects and returns the average age of all the people in the array.

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static averageAge(persons) {
    let ageSum = 0;
    let count = persons.length;
    for (const person of persons) {
      ageSum += person.age;
    }

    return ageSum / count;
  }
}

const person1 = new Person("Aryan","Thapak",32);
const person2 = new Person("Mohit","Dale",21);
const person3 = new Person("Abhishek","Upmanyu",28);
const persons=[person1,person2,person3];
console.log(person1.fullName());

console.log(`Average age of Persons are : ${Person.averageAge(persons)}`);