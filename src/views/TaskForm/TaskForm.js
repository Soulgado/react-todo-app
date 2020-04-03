import React, { useState } from 'react';
import { connect } from 'react-redux'; 
import { useHistory, useParams } from 'react-router-dom';
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
  const { project } = useParams();
  let thisProject = props.projects.find(elem => elem.name === project); 
  // finding project should be more reliable = looking by id?

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
      <p>Add new Task</p>
      <form
        onClick={(e) => e.stopPropagation()} 
        onSubmit={(e) => handleSubmit(e, name, description, due, importance)}>
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
      <button type='submit'>Add Task</button>
      </form>
    </div> 
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);