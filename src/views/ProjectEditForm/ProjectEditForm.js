import React, { useState } from 'react';

function ProjectEditForm(props) {
  const [description, setDescription] = useState(props.project.description);
  const [due, setDue] = useState(props.project.due);
  const [importance, setImportance] = useState(props.project.importance);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      description,
      due,
      importance
    }
    props.handleClick(formData);
  }

  return (
    <form onSubmit={(e) => {handleSubmit(e)}}>
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

export default ProjectEditForm;