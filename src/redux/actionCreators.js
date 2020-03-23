import * as types from './types';
import Task from '../constructors/TaskConstructor';
import Project from '../constructors/ProjectConstructor';

export function deleteProject(projectList, project) {
  const newProjectList = projectList.filter(entity => entity !== project);  
  return ({ 
    type: types.DELETE_PROJECT,
    payload: newProjectList      // action must return new object (new pointer) to state to force component update
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

export function addNewProject(projects, formData) {
  const newProject = new Project(formData.name, formData.description, formData.due, formData.importance);
  projects.push(newProject);
  return ({
    type: types.ADD_NEW_PROJECT,
    payload: projects
  })
}

export function changeProject(projects, project, formData) {
  const newProject = new Project(formData.name, formData.description, formData.due, formData.importance);
  projects.splice(projects.indexOf(project), 1, newProject);
  console.log(projects);
  return ({
    type: types.CHANGE_PROJECT,
    payload: projects
  })

}