let num=parseInt(prompt("Enter a number"));

function checkEven(num){
    return num%2==0?"True":"False";
}

console.log(checkEven(num));

const isEven=(num)=>num%2==0?"True":"False";

console.log(isEven(num));