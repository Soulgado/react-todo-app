import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewProject } from '../../redux/actionCreators';
import checkNameValidity from '../FormValidators/modules/checkName';
import NameValidator from '../FormValidators/components/NameValidator';

const mapStateToProps = state => ({
  projects: state.projects
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    addNewProject: (formData) => dispatch(addNewProject(stateProps.projects, formData))
  }
}

function ProjectForm(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [due, setDue] = useState('');
  const [importance, setImportance] = useState('');
  const [error, setError] = useState('');

  function handleClick(e) {
    e.preventDefault();
    if (checkNameValidity(name)) {
      setError(checkNameValidity(name));
      return;
    }
    const formData = {
      name,
      description,
      due,
      importance
    }
    props.handleClick();
    props.addNewProject(formData);
  }

  function handleNameChange(e) {
    setName(e.target.value);
    let error = checkNameValidity(e.target.value);
    if (error) {
      setError(error);
    } else {
      setError('');
    }
  }

  return (
      <form onSubmit={(e) => {handleClick(e)}}>
        <label>Name:
          <input type='text' name='name' value={name} onChange={(e) => handleNameChange(e)}></input>
          <NameValidator error={error} /> 
        </label>
        <label>Description:
          <textarea name='description' value={description} onChange={(e) => (setDescription(e.target.value))}></textarea>
        </label>
        <label>Due to:
          <input type='date' name='due' value={due} onChange={(e) => (setDue(e.target.value))}></input>
        </label>
        <fieldset>
          <legend>Importance</legend>
          <select name='importance' value={importance} onChange={(e) => (setImportance(e.target.value))}>
            <option name='importance' value='Low'>Low</option>
            <option name='importance' value='Medium'>Medium</option>
            <option name='importance' value='High'>High</option>
          </select>
        </fieldset>
        <button type='submit'>Create new Project</button>
      </form>
  )
}

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(ProjectForm);