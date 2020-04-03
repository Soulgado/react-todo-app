import React from 'react';

function TaskDetail(props) {
  return (
    <div className='task-details'>
      <p>Description:</p>
      <p>{props.task.description}</p>
      <p>Importance:</p>
      <p>{props.task.importance}</p>
    </div>
  )
}

export default TaskDetail;