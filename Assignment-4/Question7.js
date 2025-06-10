//Write a program to find index of duplicate elements in an array

const { takeInput, closeInput } = require("./Input");

const duplicateElement = async () => {
  let string = await takeInput("Enter a set of numbers seprated by commas : ");
  closeInput();
  const arr = string.split(",");
  const elementIndicesMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      console.log("Expected a number");
      return;
    }
    let ele = arr[i];
    if (!elementIndicesMap.has(ele)) {
      elementIndicesMap.set(ele, []);
    } else {
      elementIndicesMap.get(ele).push(i);
    }
  }

  for (const [ele, indices] of elementIndicesMap.entries()) {
    if (indices.length > 0) {
      let res = `${ele} is also present on`;
      indices.forEach((element) => {
        res += " " + element + ",";
      });
      console.log(res);
    }
  }
};

duplicateElement();
