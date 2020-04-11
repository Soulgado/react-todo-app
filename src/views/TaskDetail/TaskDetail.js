import React from 'react';

function TaskDetail(props) {
  return (
    <div className='task-details'>
      <div>
        <strong>Description:</strong>
      </div>
      <div className='task-detail-content'>
        <p>{props.task.description}</p>
      </div>
      <div>
        <strong>Importance:</strong>
      </div>
      <div className='task-detail-content'>
        <p>{props.task.importance}</p>
      </div>  
    </div>
  )
}

export default TaskDetail;