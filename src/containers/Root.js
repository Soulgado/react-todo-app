import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import { configureStore } from '../redux/configureStore';

function Root() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
}

export default Root;