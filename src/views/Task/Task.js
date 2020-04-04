import React, { useState } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import TaskDetail from '../TaskDetail/TaskDetail';
import '../../styles/task.sass';

function TaskComponent(props) {
  const [detailsActive, setDetails] = useState(false);
  let location = useLocation();
  let { url } = useRouteMatch();

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
            <Link to={{
              pathname: `${url}/edit_task`,
              state: {
                background: location,
                task: props.task
              }
            }}>
              <button
                className='edit-button'
                type='button'>
                  Edit Task
              </button>
            </Link>
            <button
              className='delete-button'
              type='button'
              onClick={() => props.handleDelete(props.task)}>
                Delete Task
            </button>
          </div>
        </div>
        {detailsActive && <TaskDetail task={props.task} />}
      </div> 
    </li>
    
  )
}

export default TaskComponent;