import React, { useState } from 'react';

function TaskEditForm(props) {
  const [name, setName] = useState(props.task.name);
  const [description, setDescription] = useState(props.task.description);
  const [due, setDue] = useState(props.task.due);
  const [importance, setImportance] = useState(props.task.importance);

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
      <button type='button'>Apply Changes</button>
    </form>
  )
}

export default TaskEditForm;
