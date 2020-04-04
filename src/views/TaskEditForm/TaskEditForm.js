import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { changeTask } from '../../redux/actionCreators';

const mapDispatchToProps = dispatch => ({
  changeTask: (task, formData) => dispatch(changeTask(task, formData))
})

function TaskEditForm(props) {
  let location = useLocation();
  let task = location.state.task;
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [due, setDue] = useState(task.due);
  const [importance, setImportance] = useState(task.importance);
  
  let history = useHistory();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  }

  function handleSubmit(e) {
    e.preventDefault();
    let formData = {
      name,
      description,
      due,
      importance
    }
    props.changeTask(task, formData);
    history.goBack();
  }

  return (
    <div
      className='form-window edit-form'
      onClick={back}>
      <form 
        onSubmit={(e) => handleSubmit(e)}
        onClick={(e) => e.stopPropagation()}>
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
  </div> 
  )
}

export default connect(
  null,
  mapDispatchToProps
)(TaskEditForm);
