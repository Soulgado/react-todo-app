import React from 'react';
import { connect } from 'react-redux';
import { addNewTaskToProject, nameChange, descriptionChange, dateChange, importanceChange } from '../../redux/actionCreators';

const mapStateToProps = state => ({
  projects: state.projects,
  currentProject: state.currentProject,
  name: state.name,
  description: state.description,
  due: state.dueDate,
  importance: state.importance
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addNewTask: () => dispatch(addNewTaskToProject(ownProps.projects, ownProps.currentProject,
    {name: ownProps.name, description: ownProps.description, due: ownProps.due, importance: ownProps.importance})),
  nameChange: (e) => dispatch(nameChange(e.target.value)),
  descChange: (e) => dispatch(descriptionChange(e.target.value)),
  dateChange: (e) => dispatch(dateChange(e.target.value)),
  importanceChange: (e) => dispatch(importanceChange(e.target.value))
})

function TaskForm(props) {
  return (
    <form>
      <label>Name:
        <input type='text' name='name' value={props.name} onChange={props.nameChange}></input> 
      </label>
      <label>Description:
        <textarea name='description' value='' onChange={props.descChange}></textarea>
      </label>
      <label>Due to:
        <input type='date' name='due' value='' onChange={props.dateChange}></input>
      </label>
      <fieldset>
        <legend>Importance</legend>
        <select onChange={props.importanceChange}>
          <option name='importance' value='Low'>Low</option>
          <option name='importance' value='Medium'>Medium</option>
          <option name='importance' value='High'>High</option>
        </select>
      </fieldset>
      <button type='button' onClick={props.addNewTask}>Add New Task</button>
    </form>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm)