import * as types from './types';
import React from 'react';
import ReactDOM from 'react-dom';
import TaskForm from '../views/TaskForm/TaskForm';
import Task from '../constructors/task';

export function deleteProject(projectList, project) {
  projectList.splice(projectList.indexOf(project), 1);
  return ({ 
    type: types.DELETE_PROJECT,
    payload: projectList
  })
}

export function addNewTaskActivate(project) {
  const projectElement = document.querySelector(`#${project.name}`);
  ReactDOM.render(<TaskForm />, projectElement);   // new task form
  return ({
    type: types.ADD_NEW_TASK_TO_DOM,
    payload: project     // set state.currentProject to project
  })
}

export function addNewTaskToProject(projects, project, formData) {
  const newTask = new Task(formData.name, formData.description, formData.due, formData.importance);
  project.addTask(newTask);
  return ({
    type: types.ADD_NEW_TASK_TO_PROJECT,
    payload: projects
  })
}

export const nameChange = (name) => ({    // validators on name field
  type: types.NAME_CHANGE,
  payload: name
})

export const descriptionChange = (description) => ({
  type: types.DESC_CHANGE,
  payload: description
})

export const dateChange = (date) => ({
  type: types.DATE_CHANGE,
  payload: date
})

export const importanceChange = (importance) => ({
  type: types.IMPORTANCE_CHANGE,
  payload: importance
})