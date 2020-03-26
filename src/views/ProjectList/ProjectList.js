import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Switch, Link, Route, useRouteMatch } from 'react-router-dom';
import Project from '../Project/Project';
import ProjectForm from '../AddProjectForm/AddProjectForm';
import ProjectListElement from '../ProjectListElement/ProjectListElement';
import { deleteProject, toggleProjectDone } from '../../redux/actionCreators';
import '../../styles/projectList.sass';

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
    toggleProject: (project) => dispatch(toggleProjectDone(project))
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
      <aside>
        <h1 className='projects-nav-title'>Projects</h1>
        <nav className='projects-nav'>
        <ol className='projects-nav-list'>
          {props.projects.map(project => {
            return (
              <li key={project.name} className='projects-nav-element'>
                <Link to={`${url}/${project.name}`}>{project.name}</Link>
              </li>
            )
          })}
        </ol>
        </nav>
      </aside>
      <div className='project-list-main-wrap'>
      <Switch>
        <Route exact path={path}>
          <div className='project-list'>
          <h1>List of all projects</h1>
            <ol>
              {props.projects.map(project => (
                  <ProjectListElement key={project.name} 
                      project={project} onClick={props.deleteProject}
                      onToggle={props.toggleProject} />
              ))}
            </ol>
          </div>
          <div className='add-new-project'>
            <button className='add-new-project-button' type='button' onClick={handleClick}>Add new Project</button>
          </div>
          {projectFormActive && <ProjectForm handleClick={handleClick}/>}
        </Route>
        <Route path={`${path}/:name`}>
          <Project />
        </Route>
      </Switch>
      </div> 
    </div>
  )
}

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(ProjectList);
