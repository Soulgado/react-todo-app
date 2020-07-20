import * as types from './types';
import Task from '../constructors/TaskConstructor';
import Project from '../constructors/ProjectConstructor';

// actionCreators that return new list of projects

export function deleteProject(projectList, project) {
  const newProjectList = projectList.filter(entity => entity !== project);  
  return ({ 
    type: types.CHANGE_PROJECT_LIST,
    payload: newProjectList
  })
}

export function addNewProject(projects, formData) {
  const newProject = new Project(formData.name, formData.description, formData.due, formData.importance);
  projects.push(newProject);
  return ({
    type: types.CHANGE_PROJECT_LIST,
    payload: projects
  })
}

// actionCreators that don't change projectList directly

export function changeProjectName(project, newName) {
  project.name = newName;
  return ({
    type: types.CHANGE_ELEMENT,
    payload: null
  })
}

export function changeProject(project, formData) {
  project.description = formData.description;
  project.due = formData.due;
  project.importance = formData.importance;
  return ({
    type: types.CHANGE_ELEMENT,
    payload: null
  })
}

export function addNewTaskToProject(project, formData) {
  const newTask = new Task(formData.name, formData.description, formData.due, formData.importance);
  project.tasks.push(newTask);
  return ({
    type: types.CHANGE_ELEMENT,
    payload: null
  })
}

export function deleteTask(project, task) {
  project.deleteTask(task);
  return ({
    type: types.CHANGE_ELEMENT,
    payload: null
  })
}

export function changeTask(task, formData) {
  task.name = formData.name;
  task.description = formData.description
  task.due = formData.due;
  task.importance = formData.importance
  return ({
    type: types.CHANGE_ELEMENT,
    payload: null
  })
}

export function toggleProjectDone(project) {
  project.toggleDone();
  return ({
    type: types.CHANGE_ELEMENT,
    payload: null
  })
}

