import * as types from './types';

export const initialState = {
  projects: [],              // use localStorage for fetching projects
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
    default:
      return state;
  };
};