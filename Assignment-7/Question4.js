//Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number
class rateLimiter {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.activeCount = 0;
  }

  addInQueue(promiseFn) {
    return new Promise((resolve, reject) => {
      const run = async () => {
        this.activeCount++;
        try {
          const result = await promiseFn();
          resolve(result);
        } catch (err) {
          reject(err);
        } finally {
          this.activeCount--;
          if (this.queue.length > 0 && this.activeCount < this.limit) {
            const next = this.queue.shift();
            next();
          }
        }

        if (this.activeCount <=this.limit) {
          run();
        } else {
          this.queue.push(run);
        }
      };
    });
  }
}

const task = function (taskId, delay) {
  return new Promise((resolve, reject) => {
    console.log(`Task ${taskId} started`);
    const prevDate=new Date().getTime();
    setTimeout(() => {
      console.log(`Task ${taskId} ended`);
      console.log(new Date().getTime()-prevDate);
      resolve(taskId);
    },2000);
  });
};

const limiter = new rateLimiter(3);



for (let i = 1; i < 10; i++) {
  limiter.addInQueue(task(i).then(console.log));
}
