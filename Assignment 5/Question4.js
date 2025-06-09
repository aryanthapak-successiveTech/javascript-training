//Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const { takeInput, closeInput } = require("./Input");

const copyArray = (arr) => {
  const copiedArr = [];
  for (const obj of arr) {
    if (typeof obj == "number") {
      copiedArr.push(obj);
    }

    if (typeof obj == "object" && !(obj instanceof Array)) {
      copiedArr.push(createObjectCopy(obj));
    }

    if (obj instanceof Array) {
      copiedArr.push(copyArray(obj));
    }
  }

  return copiedArr;
};

const createObjectCopy = (inputObject) => {
  const copyObject = {};
  for (const key in inputObject) {
    if (
      typeof inputObject[key] == "number" ||
      typeof inputObject[key] == "string"
    ) {
      copyObject[key] = inputObject[key];
    }

    if (typeof inputObject[key] == "function") {
      copyObject[key] = inputObject[key].bind(copyObject);
    }

    if (inputObject[key] instanceof Array) {
      copyObject[key] = copyArray(inputObject[key]);
    }
  }

  return copyObject;
};

const createDeepCopy=async ()=>{
    try{
    const inputObject=await takeInput("Enter a object");
    closeInput();
    const deepCopy=createDeepCopy(inputObject);
    return deepCopy;
    }

    catch(err){
        console.log(err);
    }
  
}

