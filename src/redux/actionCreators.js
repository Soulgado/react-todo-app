import * as types from './types';
import Task from '../constructors/task';

export function deleteProject(projectList, project) {
  projectList.splice(projectList.indexOf(project), 1);
  return ({ 
    type: types.DELETE_PROJECT,
    payload: projectList
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

export const setProjectActive = (project) => ({
  type: types.SET_PROJECT_ACTIVE,
  payload: project
})
