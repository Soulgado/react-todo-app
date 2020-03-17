import { createStore } from 'redux';
import { initialState, rootReducer } from './reducers';

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState
  )

  return store;
};