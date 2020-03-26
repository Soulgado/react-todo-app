import Project from './constructors/ProjectConstructor';
import Task from './constructors/TaskConstructor';
const STORAGE = 'TODO_APP_STORAGE';

export function setStorage(projects) {
  localStorage.setItem(STORAGE, JSON.stringify(projects));
}

export function getStorage() {
  let items = localStorage.getItem(STORAGE);
  if (!items) return;
  let projs = JSON.parse(items).map(obj => {
    let newProj = new Project(obj._name, obj._desc, obj._due, obj._importance);
    obj._tasks.forEach(task => {
      let newTask = new Task(task._name, task._desc, task._due, task._importance);
      newProj.addTask(newTask);
    });
    return newProj;
  });
  return projs;
}
