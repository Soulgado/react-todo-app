import React from 'react';

function Task(props) {
  return (
    <li key={props.task.name}>
      <div className='task-element'>
        <p>Name: {props.task.name}</p>
        <p>Description: {props.task.description}</p>
        <p>Due date: <time>{props.task.dueDate}</time></p>
        <p>Importance: {props.task.importance}</p>
        <button type='button'>Edit Task</button>
        <button type='button'>Delete Task</button>
      </div>
    </li>
  )
}

export default Task;