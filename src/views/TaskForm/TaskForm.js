import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewTaskToProject } from '../../redux/actionCreators';

const mapStateToProps = state => ({
  projects: state.projects,
  currentProject: state.currentProject,
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    addNewTask: (formData) => dispatch(addNewTaskToProject(stateProps.projects, stateProps.currentProject, formData))
  }
}

function TaskForm(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [due, setDue] = useState('');
  const [importance, setImportance] = useState('low');

  function handleClick(e, name, description, due, importance) {
    e.preventDefault();
    props.handleClick();
    props.addNewTask({ name, description, due, importance});
  }

  return (
    <form>
      <label>Name:
        <input type='text' name='name' value={name} onChange={(e) => (setName(e.target.value))}></input> 
      </label>
      <label>Description:
        <textarea name='description' value={description} onChange={(e) => (setDescription(e.target.value))}></textarea>
      </label>
      <label>Due to:
        <input type='date' name='due' value={due} onChange={(e) => (setDue(e.target.value))}></input>
      </label>
      <fieldset>
        <legend>Importance</legend>
        <select value={importance} onChange={(e) => (setImportance(e.target.value))}>
          <option name='importance' value='Low'>Low</option>
          <option name='importance' value='Medium'>Medium</option>
          <option name='importance' value='High'>High</option>
        </select>
      </fieldset>
      <button type='button' onClick={(e) => handleClick(e, name, description, due, importance)}>Add New Task</button>
    </form>
  )
}

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(TaskForm)