//Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

class RateLimiter {
  constructor(limit) {
    this.queue = [];
    this.limit = limit;
    this.activeLimit = 0;
  }

  addInQueue(promiseFn,priority) {
    addTask(this.queue,promiseFn,priority);
    console.log(this.queue)
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

        if (this.activeCount <= this.limit) {
          run();
        } else {
          this.queue.push(run);
        }
      };
    });
  }
}

const priortyMap = {
  Low: 1,
  Mid: 2,
  High: 3,
};

const sortQueueOnPriority = (tasks) => {
  tasks.sort((a, b) => {
    return priortyMap[b.taskPriority] - priortyMap[a.taskPriority];
  });
};


const addTask = (tasks, task, taskPriority) => {
  tasks.push({ task, taskPriority });
  sortQueueOnPriority(tasks);
};

const task=async(id)=>{
  return new Promise((resolve,reject)=>{
    console.log(`Task ${id} started`);
    setTimeout(()=>{
      console.log(`Task ${id} ended`);
      resolve(id);
    },1000)
  })
}

const rateLimiter=new RateLimiter(3);

rateLimiter.addInQueue(task(1),"High");
rateLimiter.addInQueue(task(3),"Low");
rateLimiter.addInQueue(task(2),"High");
