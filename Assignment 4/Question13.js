//Write a program to return inverse of an array


const { takeInput, closeInput } = require("./Input");

const inverseOfArray = async () => {
  let string1 = await takeInput("Enter a set of numbers seprated by commas : ");
  closeInput();
  const arr=string1.split(",");
  let i=0,j=arr.length-1;
  while(i<j){
     let temp=arr[i];
     arr[i]=arr[j];
     arr[j]=temp;
     i++;
     j--;
  }

  console.log(arr);
}

inverseOfArray();