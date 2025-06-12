// Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

const promise1=new Promise((resolve,reject)=>{
    console.log("Hi Aryan");
    resolve("success");
})

const promise2=new Promise((resolve,reject)=>{
    console.log("Welcome to QuizWiz")
    resolve("success")
})

const promise3=new Promise((resolve,reject)=>{
    console.log("How you would like to start ?")
    resolve("success")
})

const executeMultiplePromises=async (promise1,promise2,promise3)=>{
    const results=await Promise.allSettled([promise1,promise2,promise3]);
    console.log(results);
}

executeMultiplePromises(promise1,promise2,promise3);