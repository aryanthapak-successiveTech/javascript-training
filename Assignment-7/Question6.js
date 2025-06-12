//Implement a function that returns a resolved Promise after a specified delay using async/await.

const delayFunction=async (promise,timer)=>{
    if(!(promise instanceof Promise)){
        console.error("Expected a promise");
    }

    const result=await delay(promise,timer);

    console.log(result);
}

const delay=(promise,timer)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(async ()=>{
            const result=await promise;
            resolve(result);
        },timer)
    })
}

delayFunction(fetch("https://api.github.com/").then(data=>data.json()),5000)

