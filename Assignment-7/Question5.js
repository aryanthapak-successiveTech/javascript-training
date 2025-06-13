//Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

class TaskQueue {
  constructor(limit) {
    this.queue = [];
    this.limit = limit;
    this.activeLimit = 0;
  }

  schedule = async function (promiseFn, taskPriority) {
    if (this.queue.length < this.limit) {
      this.activeCount++;
      addTask(this.queue, promiseFn, taskPriority);
    }

    if (this.activeLimit <= this.limit) {
      const pendingTask = this.queue.shift().task;
      const performTask = await pendingTask;
      console.log(performTask);
      this.activeCount--;
    }
  };
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

const taskQueue = new TaskQueue(3);

taskQueue.schedule(task(1, 2000), "High");
taskQueue.schedule(task(2, 1000), "Low");
taskQueue.schedule(task(3, 2000), "High");
taskQueue.schedule(task(4, 3000), "Mid");
taskQueue.schedule(task(5, 2000), "Low");
