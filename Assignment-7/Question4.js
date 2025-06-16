//Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number
class RateLimiter {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.activeCount = 0;
  }

  schedule=async function(promiseFn) {
    if (this.queue.length < this.limit) {
      this.activeCount++;
      this.queue.push(promiseFn);
    }

    if (this.activeCount <= this.limit) {
      const pendingTask = this.queue.shift();
      const performTask=await pendingTask;
      console.log(performTask);
       this.activeCount--;
    }
  }
}


const task = function (taskId, delay) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log(`Task ${taskId} ended`);
        resolve(taskId);
      }, delay);
    } catch (err) {
      reject(err);
    }
  });
};

const limiter = new RateLimiter(5);

for (let i = 1; i < 10; i++) {
  limiter.schedule(task(i,2000));
}

while(limiter.queue.length>0){
  const reqs=limiter.popFromQueue();
  Promise.all(reqs).then((data)=>{
    console.log(data);
  })
}