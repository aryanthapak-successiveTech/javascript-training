//Write a program to sort an array (bubble sort)

const { takeInput, closeInput } = require("./Input");

const bubbleSort = async () => {
  let string = await takeInput("Enter a set of numbers seprated by commas : ");
  closeInput();
  const arr = string.split(",");
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      console.log("Expected a number");
      return;
    }
    let swapped=false;
    for (let j = 0; j < arr.length-i-1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        swapped=true;
      }

    }

    if(!swapped){
        break;
    }
  }

  console.log(arr);
};

bubbleSort();