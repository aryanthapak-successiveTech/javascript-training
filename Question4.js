// Function Approach
let num=prompt("Enter a number")

const square=function (num){
    return num*num;
}

console.log(square(num));

//Arrow Function Approach

const findSquare=(num)=>num*num;

console.log(findSquare(num));
