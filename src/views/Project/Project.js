import React, { useState } from 'react';
import { connect } from 'react-redux';
import Task from '../Task/Task';
import TaskForm from '../TaskForm/TaskForm';
import { deleteProject, setProjectActive } from '../../redux/actionCreators';

const mapStateToProps = state => {
  return {projects: state.projects}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    deleteProject: () => dispatch(deleteProject(stateProps.projects, ownProps.project)),
    setCurrentProject: () => dispatch(setProjectActive(ownProps.project))
  }
}

function Project(props) {
  const [addFormActive, setAddForm] = useState(false)

  function changeAddFormState() {
    let formState = addFormActive;
    props.setCurrentProject();
    setAddForm(!formState);
  } 

  function changeAddFormStateV2() {
    let formState = addFormActive;
    setAddForm(!formState);
  }

  return (
      <div className='project-element' id={props.project.name}>
        <p>Name: {props.project.name}</p>
        <p>Description: {props.project.description}</p>
        <p>Due date: <time>{props.project.dueDate}</time></p>
        <p>Importance: {props.project.importance}</p>
        <div className='list-of-tasks'>    
          <ul>
            {props.project.tasks.length === 0
              ? <span>None</span>
              : props.project.tasks.map(task => {
                return <Task task={task} />
              }) }
          </ul>
        </div>
        <button type='button' onClick={changeAddFormState}>Add new task</button>
        <button type='button'>Edit Project</button>
        <button type='button' onClick={props.deleteProject}>Delete Project</button>
        {addFormActive && <TaskForm handleClick={changeAddFormStateV2} />}
      </div>
  )
} 

// create element for list of tasks?
// use Higher-order component for project/task and their forms

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(Project);