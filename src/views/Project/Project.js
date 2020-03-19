import React from 'react';
import { connect } from 'react-redux';
import Task from '../Task/Task';
import TaskForm from '../TaskForm/TaskForm';
import { deleteProject, addNewTaskActivate } from '../../redux/actionCreators';

const mapStateToProps = state => {
  return {projects: state.projects}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    deleteProject: () => dispatch(deleteProject(stateProps.projects, ownProps.project)),
    addNewTaskActive: () => dispatch(addNewTaskActivate(ownProps.project))
  }
}

function Project(props) {
  console.log(props);
  return (
      <div className='project-element' id={props.project.name}>
        <p>Name: {props.project.name}</p>
        <p>Description: {props.project.description}</p>
        <p>Due date: <time>{props.project.dueDate}</time></p>
        <p>Importance: {props.project.importance}</p>
        <div className='list-of-tasks'>    
          <ul>
            {props.project.tasks === []
              ? <span>None</span>
              : props.project.tasks.map(task => {
                return <Task task={task} />
              }) }
          </ul>
        </div>
        <button type='button' onClick={props.addNewTaskActive}>Add new task</button>
        <button type='button'>Edit Project</button>
        <button type='button' onClick={props.deleteProject}>Delete Project</button>
        <TaskForm />
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