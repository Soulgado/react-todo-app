import * as types from './types';
import Task from '../constructors/TaskConstructor';
import Project from '../constructors/ProjectConstructor';

export function deleteProject(projectList, project) {
  const newProjectList = projectList.filter(entity => entity !== project);  
  return ({ 
    type: types.CHANGE_PROJECT_LIST,
    payload: newProjectList      // action must return new object (new pointer) to state to force component update
  })
}

export function addNewTaskToProject(projects, project, formData) {
  const newTask = new Task(formData.name, formData.description, formData.due, formData.importance);
  project.addTask(newTask);
  return ({
    type: types.CHANGE_ELEMENT,
    payload: projects
  })
}

export const setProjectActive = (project) => ({
  type: types.SET_PROJECT_ACTIVE,
  payload: {
    project: project,
  }
})

export function addNewProject(projects, formData) {
  const newProject = new Project(formData.name, formData.description, formData.due, formData.importance);
  projects.push(newProject);
  return ({
    type: types.CHANGE_PROJECT_LIST,
    payload: projects
  })
}

export function changeProject(projects, project, formData) {
  const newProject = new Project(formData.name, formData.description, formData.due, formData.importance);
  projects.splice(projects.indexOf(project), 1, newProject);
  return ({
    type: types.CHANGE_PROJECT_LIST,
    payload: projects
  })
}

export function deleteTask(projects, project, task) {
  project.deleteTask(task);
  let newProjects = projects.slice();
  return ({
    type: types.CHANGE_ELEMENT,
    payload: newProjects
  })
}

export function changeTask(projects, project, task, formData) {
  const newTask = new Task(formData.name, formData.description, formData.due, formData.importance);
  project.tasks.splice(project.tasks.indexOf(task), 1, newTask);
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