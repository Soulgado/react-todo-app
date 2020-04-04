import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { changeProject } from '../../redux/actionCreators';

const mapDispatchToProps = dispatch => ({
  changeProject: (project, formData) => dispatch(changeProject(project, formData))
})

function ProjectEditForm(props) {
  let location = useLocation();
  let project = location.state.project;
  let history = useHistory();
  const [description, setDescription] = useState(project.description);
  const [due, setDue] = useState(project.due);
  const [importance, setImportance] = useState(project.importance);

  let back = e => {
    e.stopPropagation();
    history.goBack();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      description,
      due,
      importance
    }
    props.changeProject(project, formData);
    history.goBack();
  }

  return (
    <div className='form-window edit-project' onClick={back}>
      <form
        onSubmit={(e) => {handleSubmit(e)}}
        onClick={(e) => e.stopPropagation()}>
      <p>Edit Project</p>
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
    </div>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(ProjectEditForm);