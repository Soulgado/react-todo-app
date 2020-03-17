import React from 'react';
import { connect } from 'react-redux';
import Task from '../Task/Task';


function Project(props) {
  return (
    <li key={props.project.name}>
      <div className='project-element'>
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
        <button type='button'>Add new task</button>
        <button type='button'>Edit Project</button>
        <button type='button'>Delete Project</button>
      </div>
    </li>
  )
} 

// create element for list of tasks?

export default Project;