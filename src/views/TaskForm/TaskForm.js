import React, { useState } from 'react';
import { connect } from 'react-redux'; 
import { useHistory, useLocation } from 'react-router-dom';
import { addNewTaskToProject } from '../../redux/actionCreators';

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = dispatch => ({
  addTask: (project, formData) => dispatch(addNewTaskToProject(project, formData))
});

function TaskForm(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [due, setDue] = useState('');
  const [importance, setImportance] = useState('low');
  let history = useHistory();
  let location = useLocation();
  let thisProject = location.state.project;

  let back = e => {
    e.stopPropagation();
    history.goBack();
  }

  function handleSubmit(e, name, description, due, importance) {
    // add validation checks
    e.preventDefault();
    props.addTask(thisProject, { name, description, due, importance});
    history.goBack();
  }

  return (
    <div className='form-window new-task-window' onClick={back}>    
      <form
        onClick={(e) => e.stopPropagation()} 
        onSubmit={(e) => handleSubmit(e, name, description, due, importance)}>
        <p>Create new Task</p>
      <div>
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          type='text'
          name='name'
          value={name}
          minLength='2'
          maxLength='120'
          onChange={(e) => (setName(e.target.value))}
          required></input> 
      </div>
      <div>
        <label htmlFor='description'>Description:</label>
        <textarea id='description' name='description' value={description} onChange={(e) => (setDescription(e.target.value))}></textarea>
      </div>
      <div>
        <label htmlFor='due'>Due to:</label>
        <input id='due' type='date' name='due' value={due} onChange={(e) => (setDue(e.target.value))}></input>
      </div>
      <div>
        <label htmlFor='importance'>Importance:</label>
          <select id='importance' value={importance} onChange={(e) => (setImportance(e.target.value))}>
            <option name='importance' value='Low'>Low</option>
            <option name='importance' value='Medium'>Medium</option>
            <option name='importance' value='High'>High</option>
          </select>
      </div>  
      <button type='submit'>Add Task</button>
      </form>
    </div> 
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);