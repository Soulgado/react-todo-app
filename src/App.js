import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import ProjectList from './views/ProjectList/ProjectList';


function App() {
  return (
    <div className='App'>
      <nav>
        <ol>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
        </ol>
      </nav>
      <Switch>
        <Route exact path='/'>
          <h1>Main Page ToDo App</h1>
        </Route>
        <Route path='/projects'>
          <ProjectList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
