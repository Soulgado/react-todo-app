import React from 'react';

function ProjectListElement(props) {
  return (
    <li>
      <div className='project-list-element'>
        <span>{props.project.name}</span>
        <span>Done: <input type='checkbox' onChange={() => props.onToggle(props.project)} defaultChecked={props.project.isDone}></input></span>
        <button type='button' onClick={() => props.onClick(props.project)}>Delete Project</button>
      </div>
    </li>
  )
}

export default ProjectListElement;