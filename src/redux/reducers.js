import * as types from './types';
import Project from '../constructors/ProjectConstructor';

const defaultProject = new Project('Example', 'Example project', "12-04-2020", 'Medium');

export const initialState = {
  projects: [defaultProject],              // use localStorage for fetching projects
  currentProject: null,
  name: '',
  description: '',
  dueDate: null,
  importance: ''
}

export const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case types.ADD_NEW_PROJECT:
      return {...state, projects: action.payload}  // don't need it??
    case types.DELETE_PROJECT:
      return {...state, projects: action.payload}
    case types.ADD_NEW_TASK_TO_DOM:
      return {...state, currentProject: action.payload};
    case types.ADD_NEW_TASK_TO_PROJECT:
      return {...state, projects: action.payload}
    case types.NAME_CHANGE:
      return {...state, name: action.payload}
    case types.DESC_CHANGE:
      return {...state, description: action.payload}
    case types.DATE_CHANGE:
      return {...state, dueDate: action.payload}
    case types.IMPORTANCE_CHANGE:
      return {...state, importance: action.payload}
    default:
      return state;
  };
};