const obj = {
  a: 1,
  b: { c: 2, d: [3, 4] },
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

  ans+=" }"
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
      let tempKey = `${oldKey}.${key}.`;
      ans += arrayFlattenHandler(tempKey, newObject[key]);
    }
  }

  return ans;
};
const arrayFlattenHandler = (oldKey, arr) => {
  let arrayAns = "";
  for (const idx in arr) {
    let temp = oldKey;
    if (typeof arr[idx] == "number") {
      arrayAns += `${temp}${idx}:${arr[idx]}`;
      if (idx < arr.length - 1) {
        arrayAns += ",";
      }
    }
  }

  return arrayAns;
};


console.log(flattenObject(obj));
