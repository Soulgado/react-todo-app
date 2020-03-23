import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeProject } from '../../redux/actionCreators';

const mapStateToProps = state => ({
  project: state.currentProject,
  projects: state.projects
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    changeProject: (formData) => dispatch(changeProject(stateProps.projects, stateProps.project, formData))
  }
}

function ProjectEditForm(props) {
  const [name, setName] = useState(props.project.name);
  const [description, setDescription] = useState(props.project.description);
  const [due, setDue] = useState(props.project.due);
  const [importance, setImportance] = useState(props.project.importance);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name,
      description,
      due,
      importance
    }
    props.handleClick();
    props.changeProject(formData);
  }

  return (
    <form onSubmit={(e) => {handleSubmit(e)}}>
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
        <select name='importance' value={importance} onChange={(e) => (setImportance(e.target.value))}>
          <option name='importance' value='Low'>Low</option>
          <option name='importance' value='Medium'>Medium</option>
          <option name='importance' value='High'>High</option>
        </select>
      </fieldset>
      <button type='submit'>Apply changes</button>
    </form>
  )
}

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(ProjectEditForm);