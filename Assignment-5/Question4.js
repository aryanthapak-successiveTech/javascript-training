//Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

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

    if (Array.isArray(inputObject[key])) {
      copyObject[key] = copyArray(inputObject[key]);
    }

    if (
      inputObject[key] instanceof Object &&
      !Array.isArray(inputObject[key])
    ) {
      copyObject[key] = createObjectCopy(inputObject[key]);
    }
  }

  return copyObject;
};

const orignalCopy = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4, 5],
  },
};

const createDeepCopy = (orignalCopy) => {
  const deepCopy = createObjectCopy(orignalCopy);
  return deepCopy;
};

console.log(createDeepCopy(orignalCopy));
