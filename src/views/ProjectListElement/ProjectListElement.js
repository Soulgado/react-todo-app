import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeProjectName } from '../../redux/actionCreators';

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeName: (name) => dispatch(changeProjectName(ownProps.project, name))
})
 
function ProjectListElement(props) {
  const [name, setName] = useState(props.project.name);
  const [formActive, setForm] = useState(false);

  function handleRenameClick() {
    if (!formActive) {
      setForm(true);
      return;
    } else {
      setForm(false);
      props.changeName(name);
    }
  }

  return (
    <li>
      <div className='project-list-element'>
        {formActive ? 
        <input id='project-name' type='text' value={name}
            onChange={(e) => setName(e.target.value)}></input>
        : <span>{name}</span>}
        <span>Done: 
        <input type='checkbox' onChange={() => props.onToggle(props.project)}
            defaultChecked={props.project.isDone}></input></span>
        <button className='edit-button' type='button'
            onClick={handleRenameClick}>Rename</button>
        <button className='delete-button' type='button'
            onClick={() => props.onClick(props.project)}>Delete Project</button>
      </div>
    </li>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(ProjectListElement);