//Find Error in below questions and rectify them

// 2. let myObject = { name: 'John', age: 30 };
// for (property in myObject) {
//    console.log(property + ': ' + myObject.property);
// }

let myObject={name:'John',age:30};
for(const property in myObject){
    console.log(property+": " +myObject[property]);      //Fixed by replacing . with []
}