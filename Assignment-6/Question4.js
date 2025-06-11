//Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`.
//The class should also have a method called `fullName` that returns the person's full name.
//Additionally, the class should have a method called `averageAge`
//that takes in an array of `Person` objects and returns the average age of all the people in the array.

class Person {
  constructor(firstName, lastName, age) {
    if(!firstName.match(/^[A-Za-z]+$/)){
      console.error(`Enter a valid First Name only consisting with alphabets you entered ${firstName}`)
      return this;
    }

    if(!lastName.match(/^[A-Za-z]+$/)){
      console.error(`Enter a valid Last Name only consisting with alphabets you entered ${lastName}`)
      return this;
    }

     if(isNaN(age) || age<0.5 ||age>100){
      console.error(`Expected a valid age between 0.5 and 100`);
      return this;
    }
    

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
const person2 = new Person("Mohit","Dale123",21);
const person3 = new Person("Abhishek","Upmanyu",28);
const persons=[person1,person2,person3];
for(const person of persons){
  console.log(person.fullName())
}

console.log(`Average age of Persons are : ${Person.averageAge(persons)}`);