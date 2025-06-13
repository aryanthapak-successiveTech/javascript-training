//Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

class TaskQueue {
  constructor(limit) {
    this.queue = [];
    this.limit = limit;
    this.activeLimit = 0;
  }

  addInQueue(promiseFn, priority) {
    addTask(this.queue, promiseFn, priority);
  }

  popFromQueue() {
    const arr = [];
    let tempLimit = this.limit;

    while (tempLimit-- && this.queue.length > 0) {
      arr.push(this.queue.shift().task);
     
    }
    
    return arr;
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

const task = async (id) => {
  return new Promise((resolve, reject) => {
    console.log(`Task ${id} started`);
    setTimeout(() => {
      console.log(`Task ${id} ended`);
      resolve(id);
    }, 1000);
  });
};

const taskQueue = new TaskQueue(3);

taskQueue.addInQueue(task(1), "High");
taskQueue.addInQueue(task(2), "Low");
taskQueue.addInQueue(task(3), "High");
taskQueue.addInQueue(task(4), "Mid");
taskQueue.addInQueue(task(5), "Low");


while (taskQueue.queue.length > 0) {
  const reqs=taskQueue.popFromQueue();
  Promise.all(reqs).then((results) => console.log(results));
}

