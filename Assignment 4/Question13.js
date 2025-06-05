//Write a program to return inverse of an array


const { takeInput, closeInput } = require("./Input");

const inverseOfArray = async () => {
  let string1 = await takeInput("Enter a set of numbers seprated by commas : ");
  closeInput();
  const arr=string1.split(",");
  const newArr=[];
  for(let i=0;i<arr.length;i++){
    newArr[arr[i]]=i;
  }

  console.log(newArr);
}

inverseOfArray();