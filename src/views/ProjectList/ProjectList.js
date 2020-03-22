import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Switch, Link, Route, useRouteMatch } from 'react-router-dom';
import Project from '../Project/Project';
import ProjectForm from '../AddProjectForm/AddProjectForm';
import { deleteProject } from '../../redux/actionCreators';

const mapStateToProps = state => {
  return {
    projects: state.projects
  }
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    deleteProject: (thisProject) => dispatch(deleteProject(stateProps.projects, thisProject)),
  }
}

function ProjectList(props) {
  let { path, url } = useRouteMatch();
  let [projectFormActive, setProjectForm] = useState(false);

  function handleClick() {
    setProjectForm(!projectFormActive);
  }

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
                    <div className='project-list-element'>
                      <span>{project.name}</span>
                      <button type='button' onClick={() => props.deleteProject(project)}>Delete Project</button>
                    </div>
                    
                  </li>
                )
              })}
            </ol>
          </div>
          <div className='add-new-project'>
            <button type='button' onClick={handleClick}>Add new Project</button>
          </div>
          {projectFormActive && <ProjectForm handleClick={handleClick}/>}
        </Route>
        <Route path={`${path}/:name`}>
          <Project />
        </Route>
      </Switch>
      
    </div>
  )
}

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(ProjectList);
