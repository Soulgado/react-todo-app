import React from 'react';
import { connect } from 'react-redux';
import { Switch, Link, Route, useRouteMatch } from 'react-router-dom';
import Project from '../Project/Project';

const mapStateToProps = state => {
  return {
    projects: state.projects
  }
};

function ProjectList(props) {
  let { path, url } = useRouteMatch();

  return (
    <div className='project-list-wrap'>
      <nav className='projects-nav'>
      <ol>
        {props.projects.map(project => {
          return (
            <li key={project.name}>
              <Link to={`${url}/${project.name}`}>{project.name}</Link>
            </li>
          )
        })}
      </ol>
      </nav>
      <p>List of all projects</p>
      <Switch>
        <Route exact path={path}>
          <div className='project-list'>
            <ol>
              {props.projects.map(project => {
                return (
                  <li key={project.name}>
                    {project.name} 
                  </li>
                )
              })}
            </ol>
          </div>
        </Route>
        <Route path={`${path}/:name`}>
          <Project />
        </Route>
      </Switch>
      
    </div>
  )
}

export default connect(mapStateToProps)(ProjectList);
