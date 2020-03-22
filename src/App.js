import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import './styles/header.sass'
import ProjectList from './views/ProjectList/ProjectList';


function App() {
  return (
    <div className='App'>
      <header>
        <nav>
          <ul className='navigation-list'>
            <li className='nav-list-element'>
              <Link to='/'>Home</Link>
            </li>
            <li className='nav-list-element'>
              <Link to='/projects'>Projects</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path='/'>
            <h1>Main Page ToDo App</h1>
          </Route>
          <Route path='/projects'>
            <ProjectList />
          </Route>
        </Switch>
      </main> 
    </div>
  );
}

export default App;
