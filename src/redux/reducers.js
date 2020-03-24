import * as types from './types';
import Project from '../constructors/ProjectConstructor';
import Task from '../constructors/TaskConstructor';

const defaultProject = new Project('Example', 'Example project', '12-04-2020', 'Medium');
const defaultProject2 = new Project('JustLearning', 'Just learning different stuff', '03-25-2020', 'High');
const task1 = new Task('Example Task', 'Very important task', '04-23-2020', 'Medium');
defaultProject.addTask(task1);

export const initialState = {
  projects: [defaultProject, defaultProject2],     // use localStorage for fetching projects
  currentProject: null,
  currentTask: null
}

export const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case types.ADD_NEW_PROJECT:
      return {...state, projects: action.payload}
    case types.DELETE_PROJECT:
      return {...state, projects: action.payload}
    case types.ADD_NEW_TASK_TO_PROJECT:
      return {...state, projects: action.payload, currentProject: null}
    case types.SET_PROJECT_ACTIVE:
      return {...state, currentProject: action.payload.project, currentTasks: action.payload.tasks}
    case types.CHANGE_PROJECT:
      return {...state, projects: action.payload}
    case types.DELETE_TASK:
      return {...state, projects: action.payload}
    case types.CHANGE_TASK:
      return {...state, projects: action.payload}
    default:
      return state;
  };
};