// Write a program to find the last duplicate index in an array

const { takeInput, closeInput } = require("./Input");

const LastDuplicateElement = async () => {
  let string = await takeInput("Enter a set of numbers seprated by commas : ");
  closeInput();
  let arr=string.split(",");
  const elementCountMap=new Map();
  const visited=new Set();
  for(const ele of arr){
    if (isNaN(ele)) {
      console.log("Expected a number");
      return;
    }
    elementCountMap.set(ele,(elementCountMap.has(ele)?elementCountMap.get(ele):0)+1);
  }

  for(let i=arr.length-1;i>=0;i--){
    if(elementCountMap.get(arr[i])>1 && !visited.has(arr[i])){
        console.log(i);
    }

    visited.add(arr[i]);
  }
}

LastDuplicateElement()
