class Task {
  constructor(name, desc, due, importance) {
    this._name = name;
    this._desc = desc;
    this._due = due;    // use new Date(due)??
    this._importance = importance;
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
    this._due = newDate;
  }

  get importance() {
    return this._importance;
  }

  set importance(newImportance) {
    this._importance = newImportance;
  }

  isDeadline() {
    const currentDate = new Date();
    if (this._due > currentDate && this._due - currentDate < 259200) {   // less than 3 days
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