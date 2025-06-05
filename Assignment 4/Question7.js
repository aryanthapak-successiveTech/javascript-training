//Write a program to find index of duplicate elements in an array

const { takeInput, closeInput } = require("./Input");

const duplicateElement = async () => {
  let string = await takeInput("Enter a set of numbers seprated by commas : ");
  closeInput();
  const arr=string.split(',');
  const elementCountMap=new Map();
  const visited=new Set();

  for(let i=0;i<arr.length;i++){
    if (isNaN(arr[i])) {
      console.log("Expected a number");
      return;
    }
    let ele=arr[i];
    elementCountMap.set(ele,(elementCountMap.has(ele)?elementCountMap.get(ele):0)+1);
}

for(let i=0;i<arr.length;i++){
    if(elementCountMap.get(arr[i])>1 && !visited.has(arr[i])){
        console.log(i);
        visited.add(arr[i]);
    }
}

}

duplicateElement()