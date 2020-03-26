import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
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
            <div className='main-page-content'>
              <h1>Main Page ToDo App</h1>
              <div>
                <p>This is a simple ToDo webapp for managing your personal projects and tasks.
                    Functionality includes:</p>
                <ul>
                  <li>Create projects with description, due date and importance</li>
                  <li>For each project create tasks</li>
                  <li>Projects are saved locally</li>
                </ul>
              </div>
            </div>
            
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
