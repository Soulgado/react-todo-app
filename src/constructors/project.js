import Task from './task';

class Project extends Task {
  constructor(name, desc, due, importance) {
    super(name, desc, due, importance);
    this._tasks = [];
  } 
  
  get tasks() {
    return this._tasks;
  }

  addTask(newTask) {
    this._tasks.push(newTask);
  }

  deleteTask(task) {
    this._tasks = this._tasks.filter(element => element !== task)  // best implementation??? index/filter/another??
  }
}

export default Project;
