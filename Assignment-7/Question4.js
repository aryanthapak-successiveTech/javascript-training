//Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number
class rateLimiter {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.activeCount = 0;
  }

  addInQueue(promiseFn) {
    this.queue.push(promiseFn);
  }

  popFromQueue(){
    const arr=[];
    let tempLimit=this.limit;
    while(tempLimit-- && this.queue.length>0){
      arr.push(this.queue.shift());
    }

    return arr;
  }
}


const task = function (taskId, delay) {
  return new Promise((resolve, reject) => {
    console.log(`Task ${taskId} started`);
    setTimeout(() => {
      console.log(`Task ${taskId} ended`);
      resolve(taskId);
    },2000);
  });
};

const limiter = new rateLimiter(3);

for(let i=1;i<10;i++){
  limiter.addInQueue(task(i));
}

while(limiter.queue.length>0){
  const reqs=limiter.popFromQueue();
  Promise.all(reqs).then((data)=>{
    console.log(data);
  })
}