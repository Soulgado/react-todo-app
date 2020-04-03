import React, { useState } from 'react';
import TaskEditForm from '../TaskEditForm/TaskEditForm';
import TaskDetail from '../TaskDetail/TaskDetail';
import '../../styles/task.sass';

function TaskComponent(props) {
  const [editFormActive, setEditForm] = useState(false);
  const [detailsActive, setDetails] = useState(false);


  function handleClick() {
    setEditForm(!editFormActive);
  }

  function toggleDetails() {
    setDetails(!detailsActive);
  }

  return (
    <li>
      <div className='task-element-wrapper'>
        <div className='task-element' id={props.task.name}>
          <p>Task: <strong>{props.task.name}</strong></p>
          <p>Due date: <time>{props.task.dueDate.toDateString()}</time></p>
          <div id='task-buttons'>
            <button 
              className='details-button'
              type='button'
              onClick={toggleDetails}>
                Details {detailsActive ? '⮝' : '⮟'}
            </button>
            <button
              className='edit-button'
              type='button'
              onClick={handleClick}>
                Edit Task
            </button>
            <button
              className='delete-button'
              type='button'
              onClick={() => props.handleDelete(props.task)}>
                Delete Task
            </button>
          </div>
        </div>
        {detailsActive && <TaskDetail task={props.task} />}
        {editFormActive && <TaskEditForm task={props.task} handleClick={handleClick}/>}
      </div> 
    </li>
    
  )
}

export default TaskComponent;