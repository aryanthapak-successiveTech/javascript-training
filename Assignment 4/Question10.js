//Write a program to concatenate an input of array of arrays

const arr=[[1,2,3],[4,5,6],[7,8,9]];

let tempArr="";

for(let i=0;i<arr.length;i++){
    const ele=arr[i];
    tempArr+=ele.join(",");

    if(i<arr.length-1){
        tempArr+=',';
    }
    
}

const resArray=tempArr.split(",");

console.log(resArray);