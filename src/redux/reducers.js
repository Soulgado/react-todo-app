import * as types from './types';
import Project from '../constructors/ProjectConstructor';
import Task from '../constructors/TaskConstructor';
import { setStorage, getStorage } from '../localStorage';

const defaultProject = new Project('Example', 'Example project', '12-04-2020', 'Medium');
const defaultProject2 = new Project('JustLearning', 'Just learning different stuff', '03-25-2020', 'High');
const task1 = new Task('Example Task', 'Very important task', '04-23-2020', 'Medium');
defaultProject.addTask(task1);
const defaultProject3 = new Project('CompletedProject', 'This project has already been completed', '03-25-2020', 'Low');
defaultProject3.toggleDone();

const projects = getStorage();
const defaultProjects = [defaultProject, defaultProject2, defaultProject3];

export const initialState = {
  projects: projects ? projects : defaultProjects,  
  currentProject: null,
  currentTasks: null
}

export const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case types.CHANGE_PROJECT_LIST:
      setStorage(action.payload);
      return {...state, projects: action.payload}
    case types.CHANGE_ELEMENT:
      setStorage(state.projects);
      return {...state, projects: state.projects.slice()}
    case types.SET_PROJECT_ACTIVE:
      return {...state, currentProject: action.payload.project, currentTasks: action.payload.tasks}
    default:
      return state;
  };
};