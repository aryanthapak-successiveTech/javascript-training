// Create a class Person with properties name, age, gender, and interests.
// Add a method greeting() that returns a string introducing the person.
// Also add a method farewell() that returns a string saying goodbye to the person.

// 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.
// 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.
// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.



class Person {
  constructor(name, age, gender, interesets) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interesets = interesets;
  }

  greeting() {
    let greetingString = `Hello ${this.name} these are your details\nAge:${this.age}\nGender:${this.gender}\ninterests:${this.interesets}`
    return greetingString;
  }

  farewell() {
    let goodByeString = `Bye ${this.name} have a nice day`;
    return goodByeString;
  }
}

class Student extends Person{
    constructor(name, age, gender, interesets,studying){
        super(name,age,gender,interesets,studying);
        this.studying=studying;
    }

    greeting(){
        let greetingString=`Hello ${this.name} these are your details\nAge:${this.age}\nGender:${this.gender}\ninterests:${this.interesets}\nstudying:studying`;
        return greetingString;
    }
}

class Teacher extends Person{
    constructor(name,age,gender,interesets,subjectsTaught){
        this.subjectsTaught=subjectsTaught;
    }

    farewell(){
        let goodByeString = `Bye ${this.name} your subjects are : ${this.subjectsTaught}`;
        return goodByeString;
    }
}


