const {flattenDeep}=require("lodash")
const {add,subtract}=require("./Math/Math")
const arr=[1,2,[5,6,7,[8,9,[10]]]]

console.log(flattenDeep(arr));

const sum=add(3,4);

const diff=subtract(4,3);

console.log(`Addition : ${sum}`);

console.log(`Difference : ${diff}`);