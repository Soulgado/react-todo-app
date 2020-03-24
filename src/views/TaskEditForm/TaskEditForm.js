import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeTask } from '../../redux/actionCreators';

const mapStateToProps = state => ({
  projects: state.projects,
  project: state.currentProject
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    changeTask: (formData) => dispatch(changeTask(stateProps.projects, stateProps.projects, ownProps.task, formData))
  }
}

function TaskEditForm(props) {
  const [name, setName] = useState(props.task.name);
  const [description, setDescription] = useState(props.task.description);
  const [due, setDue] = useState(props.task.due);
  const [importance, setImportance] = useState(props.task.importance);

  function handleSubmit(e) {
    e.preventDefault();
    let formData = {
      name,
      description,
      due,
      importance
    }
    props.handleClick();
    props.changeTask(formData);

  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
      <button type='submit'>Apply Changes</button>
    </form>
  )
}

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(TaskEditForm);
