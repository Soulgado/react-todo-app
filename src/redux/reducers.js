import * as types from './types';
import Project from '../constructors/ProjectConstructor';

const defaultProject = new Project('Example', 'Example project', "12-04-2020", 'Medium');

export const initialState = {
  projects: [defaultProject],              // use localStorage for fetching projects
  currentProject: null,
}

export const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case types.ADD_NEW_PROJECT:
      return {...state, projects: action.payload}  // don't need it??
    case types.DELETE_PROJECT:
      return {...state, projects: action.payload}
    case types.ADD_NEW_TASK_TO_PROJECT:
      return {...state, projects: action.payload, currentProject: null}
    case types.SET_PROJECT_ACTIVE:
      return {...state, currentProject: action.payload}
    default:
      return state;
  };
};