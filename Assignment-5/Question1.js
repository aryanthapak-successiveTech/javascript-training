//1. Write a program to iterate over object.


const obj={
    firstName:"Aryan",
    lastName:"Thapak",
    age:40
};

const iterateOverObject=(obj)=>{
    const objectEntries=Object.entries(obj);
    for(const [key,value] of objectEntries){
        console.log(`${key} : ${value}`);
    }
}

iterateOverObject(obj);