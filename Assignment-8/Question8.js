// Find Error in below questions and rectify them

//8. function Person(name, age) { this.name = name; this.age = age; }
// Person.prototype.getDetails = function() {
//    console.log(this.name + " is " + this.age + " years old");
// };

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getDetails = function () {
  console.log(this.name + " is " + this.age + " years old");
};

const person=new Person("Aryan Thapak",40);   //Added object for checking execution
person?.getDetails()

