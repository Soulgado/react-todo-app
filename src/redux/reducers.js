import * as types from './types';
import defaultProjects from '../defaultStore';
import { setStorage, getStorage } from '../localStorage';

const projects = getStorage();

export const initialState = {
  projects: projects ? projects : defaultProjects,  
}

export const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case types.CHANGE_PROJECT_LIST:
      setStorage(action.payload);  // only for adding/deleting projects
      return {...state, projects: action.payload}
    case types.CHANGE_ELEMENT:
      setStorage(state.projects);  // don't need to change state, because it contains references to changed objects
      return {...state, projects: state.projects.slice()}
    default:
      return state;
  };
};