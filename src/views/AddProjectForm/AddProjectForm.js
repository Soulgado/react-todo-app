import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
  let history = useHistory();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  }

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
    props.addNewProject(formData);
    history.goBack();
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
    <div className='form-window new-project-window' onClick={back}>
      <form 
        onSubmit={(e) => {handleClick(e)}}
        onClick={(e) => e.stopPropagation()}>
        <p>Create new Project</p>
        <div>
          <label htmlFor='name'>Title:</label>
          <input id='name' type='text' name='name' value={name} onChange={(e) => handleNameChange(e)}></input>
          <NameValidator error={error} /> 
        </div>
        <div>
          <label htmlFor='desc'>Description:</label>
          <textarea id='desc' name='description' value={description} onChange={(e) => (setDescription(e.target.value))}></textarea>
        </div>
        <div>
          <label htmlFor='date'>Due to:</label>
          <input id='date' type='date' name='due' value={due} onChange={(e) => (setDue(e.target.value))}></input>
        </div>
        <div>
          <label htmlFor='importance'>Importance:</label>
            <select id='importance' name='importance' value={importance} onChange={(e) => (setImportance(e.target.value))}>
              <option name='importance' value='Low'>Low</option>
              <option name='importance' value='Medium'>Medium</option>
              <option name='importance' value='High'>High</option>
            </select>
        </div>
        <button type='submit'>Create Project</button>
      </form>
    </div>
  )
}

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(ProjectForm);