//Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
//const obj = {
//   a: 1,
//   b: { c: 2, d: [3, 4] }
//};
//Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

const obj = {
  a: 1,
  b: { c: 2, d: [3,4] },
};

const flattenObject = (obj) => {
  let ans = "{ ";

  for (const key in obj) {
    if (typeof obj[key] == "number") {
      ans += `${key}:${obj[key]},`;
    }

    if (typeof obj[key] == "object") {
      ans += combineObject(key, obj[key]);
    }
  }

  ans += " }";
  return ans;
};

const combineObject = (oldKey, newObject) => {
  let ans = "";
  for (const key in newObject) {
    if (typeof newObject[key] == "number") {
      ans += `${oldKey}.${key}`;

      ans += ":" + newObject[key] + ",";
    }

    if (newObject[key] instanceof Array) {
      let tempKey = `${oldKey}.${key}`;
      ans += arrayFlattenHandler(tempKey, newObject[key]);
    }

    if (
      newObject[key] instanceof Object &&
      !(newObject[key] instanceof Array)
    ) {
      let tempOldKey = `${oldKey}.${key}`;
      ans += combineObject(tempOldKey, newObject[key]);
    }
  }

  return ans;
};
const arrayFlattenHandler = (oldKey, arr) => {
  let arrayAns = "";
  for (const idx in arr) {
    let temp = oldKey+".";
    if (typeof arr[idx] == "number") {
      arrayAns += `${temp}${idx}:${arr[idx]}`;
      if (idx < arr.length) {
        arrayAns += ",";
      }
    }

    if(arr[idx] instanceof Object){
        let tempOldKey=`${oldKey}.${idx}`
        console.log(tempOldKey);
        arrayAns+=combineObject(tempOldKey,arr[idx]);
    }
  }

  return arrayAns;
};

console.log(flattenObject(obj));
