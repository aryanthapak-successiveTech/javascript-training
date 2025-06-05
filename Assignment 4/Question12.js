//Write a program to display intersection of two array

const { takeInput, closeInput } = require("./Input");

const findIntersectionOfArrays = async () => {
  let string1 = await takeInput("Enter a set of numbers seprated by commas : ");
  let string2 = await takeInput(
    "Enter another set of numbers seprated by commas : "
  );
  closeInput();
  const arr1 = string1.split(",");
  const arr2 = string2.split(",");

  const arr1Data = new Set(arr1);

  if (arr1Data.size == 0) {
    console.log("Empty Array");
    return;
  }

  for (const ele of arr2) {
    
    if (arr1Data.has(ele)) {
      console.log(ele);
    }
  }
};
findIntersectionOfArrays();
