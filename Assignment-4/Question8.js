//Write a program to remove dupliacte elements from an array



const { takeInput, closeInput } = require("./Input");

const removeDuplicates = async () => {
  let string = await takeInput("Enter a set of numbers seprated by commas : ");
  closeInput();
  const arr=string.split(",");
  const eleSet=new Set();
  const newArr=[];
  for(const ele of arr){
    if (isNaN(ele)) {
      console.log("Expected a number");
      return;
    }
    if(!eleSet.has(ele)){
        newArr.push(ele);
    }
    eleSet.add(ele);
  }
  console.log(newArr);
}

removeDuplicates();