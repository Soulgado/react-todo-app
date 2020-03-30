import React, { useState } from 'react';
import TaskEditForm from '../TaskEditForm/TaskEditForm';
import '../../styles/task.sass';

function TaskComponent(props) {
  const [editFormActive, setEditForm] = useState(false);

  function handleClick() {
    setEditForm(!editFormActive);
  }

  return (
    <li>
      <div className='task-element-wrapper'>
        <div className='task-element' id={props.task.name}>
          <p>Name: {props.task.name}</p>
          <p>Description: {props.task.description}</p>
          <p>Due date: <time>{props.task.dueDate.toDateString()}</time></p>
          <p>Importance: {props.task.importance}</p>
          <button className='edit-button' type='button' onClick={handleClick}>Edit Task</button>
          <button className='delete-button' type='button' onClick={() => props.handleDelete(props.task)}>Delete Task</button>
        </div>
        {editFormActive && <TaskEditForm task={props.task} handleClick={handleClick}/>}
      </div> 
    </li>
    
  )
}

export default TaskComponent;