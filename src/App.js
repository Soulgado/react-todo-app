import React from 'react';
import { Route, Link, Switch, useLocation } from 'react-router-dom';
import './styles/header.sass'
import ProjectList from './views/ProjectList/ProjectList';
import ProjectForm from './views/AddProjectForm/AddProjectForm';
import TaskForm from './views/TaskForm/TaskForm';
import TaskEditForm from './views/TaskEditForm/TaskEditForm';
import ProjectEditForm from './views/ProjectEditForm/ProjectEditForm';

function App() {
  let location = useLocation();
  let background = location.state && location.state.background;

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
        <Switch location={background || location}>
          <Route exact path='/'>
            <div className='main-page-content'>
              <h1>Main Page ToDo App</h1>
              <div>
                <p>This is a simple ToDo webapp for managing your personal projects and tasks.
                    Functionality includes:</p>
                <ul>
                  <li>Create projects with description, due date and importance</li>
                  <li>For each project create tasks</li>
                  <li>
                    Projects are saved locally,
                     using <a href='https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage'>localStorage</a>
                  </li>
                </ul>
                <div>
                  <button className='add-new-project-button' type='button'>
                    <Link to='/projects'>Start Projects</Link>
                  </button></div>
              </div>
            </div>
          </Route>
          <Route path='/projects'>
            <ProjectList />
          </Route>
        </Switch>
        {background && <Route path='/new_project' children={<ProjectForm />} />}
        {background && <Route path='/projects/:project/new_task' children={<TaskForm />} />}
        {background && <Route path='/projects/:project/edit_task' children={<TaskEditForm />} />}
        {background && <Route path='/projects/:project/edit_project' children={<ProjectEditForm />} />}
      </main> 
    </div>
  );
}

export default App;
