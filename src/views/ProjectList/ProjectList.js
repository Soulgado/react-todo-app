import React from 'react';
import { connect } from 'react-redux';
import Project from '../Project/Project';

const mapStateToProps = state => {
  return {
    projects: state.projects
  }
};

function ProjectList(props) {
  return (
    <div className='project-list-wrap'>
      <p>List of all projects</p>
      <div className='project-list'>
        <ol>
          {props.projects.map(project => {
            return <Project project={project} />   // create Project element
          })}
        </ol>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(ProjectList);
