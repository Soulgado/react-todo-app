import React, { useState } from 'react';
import TaskEditForm from '../TaskEditForm/TaskEditForm';

function TaskComponent(props) {
  const [editFormActive, setEditForm] = useState(false);

  function handleClick() {
    setEditForm(!editFormActive);
  }

  return (
    <li key={props.task.name}>
      <div className='task-element' id={props.task.name}>
        <p>Name: {props.task.name}</p>
        <p>Description: {props.task.description}</p>
        <p>Due date: <time>{props.task.dueDate}</time></p>
        <p>Importance: {props.task.importance}</p>
        <button type='button' onClick={handleClick}>Edit Task</button>
        <button type='button'>Delete Task</button>
        {editFormActive && <TaskEditForm task={props.task} />}
      </div>
    </li>
  )
}

export default TaskComponent;