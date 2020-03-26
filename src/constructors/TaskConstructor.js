class Task {
  constructor(name, desc, due, importance) {
    this._name = name;
    this._desc = desc;
    this._due = new Date(due); 
    this._importance = importance;
    this._isDone = false;      // change to argument value???
  } 
  
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get description() {
    return this._desc;
  }

  set description(newDesc) {
    this._desc = newDesc;
  }

  get dueDate() {
    return this._due;
  }

  set dueDate(newDate) {
    this._due = new Date(newDate);
  }

  get importance() {
    return this._importance;
  }

  set importance(newImportance) {
    this._importance = newImportance;
  }

  get isDone() {
    return this._isDone;
  }

  toggleDone() {
    this._isDone = !this._isDone;
  }

  daysLeft() {
    const currentDate = new Date();
    let difference = Math.round((this._due - currentDate)/1000/60/60/24);
    return difference > 0 ? difference : 0;
  }

  isDeadline() {
    const currentDate = new Date();
    if (this._due > currentDate && this._due - currentDate < 259200000) {   // less than 3 days
      return true;
    }
    return false;
  }

  isLate() {
    const currentDate = new Date();
    return this._due < currentDate ? true : false;
  }
}

export default Task;