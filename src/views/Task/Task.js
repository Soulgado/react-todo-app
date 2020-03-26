import React, { useState } from 'react';
import { connect } from 'react-redux'; 
import TaskEditForm from '../TaskEditForm/TaskEditForm';
import { deleteTask } from '../../redux/actionCreators';
import '../../styles/task.sass';

const mapStateToProps = state => ({
  projects: state.projects,
  project: state.currentProject,
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    deleteTask: () => dispatch(deleteTask(stateProps.projects, stateProps.project, ownProps.task))
  }
}

// !important: this element works, but gives warning on change

function TaskComponent(props) {
  const [editFormActive, setEditForm] = useState(false);

  function handleClick() {
    setEditForm(!editFormActive);
  }

  return (
    <div className='task-element-wrapper'>
      <div className='task-element' id={props.task.name}>
        <p>Name: {props.task.name}</p>
        <p>Description: {props.task.description}</p>
        <p>Due date: <time>{props.task.dueDate.toDateString()}</time></p>
        <p>Importance: {props.task.importance}</p>
        <button type='button' onClick={handleClick}>Edit Task</button>
        <button type='button' onClick={props.deleteTask}>Delete Task</button>
      </div>
      {editFormActive && <TaskEditForm task={props.task} handleClick={handleClick}/>}
    </div> 
  )
}

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(TaskComponent);