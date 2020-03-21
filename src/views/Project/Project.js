import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Task from '../Task/Task';
import TaskForm from '../TaskForm/TaskForm';
import { deleteProject, setProjectActive } from '../../redux/actionCreators';

const mapStateToProps = state => {
  return {projects: state.projects}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    deleteProject: (thisProject) => dispatch(deleteProject(stateProps.projects, thisProject)),
    setCurrentProject: (thisProject) => dispatch(setProjectActive(thisProject))
  }
}

function Project(props) {
  const [addFormActive, setAddForm] = useState(false);
  let { name } = useParams();
  let thisProject = props.projects.find(elem => elem.name === name);

  function changeAddFormState() {
    let formState = addFormActive;
    props.setCurrentProject(thisProject);
    setAddForm(!formState);
  } 

  function changeAddFormStateV2() {
    let formState = addFormActive;
    setAddForm(!formState);
  }

  return (
      <div className='project-element' id={thisProject.name}>
        <p>Name: {thisProject.name}</p>
        <p>Description: {thisProject.description}</p>
        <p>Due date: <time>{thisProject.dueDate}</time></p>
        <p>Importance: {thisProject.importance}</p>
        <div className='list-of-tasks'>    
          <ul>
            {thisProject.tasks.length === 0
              ? <span>None</span>
              : thisProject.tasks.map(task => {
                return <Task task={task} />
              }) }
          </ul>
        </div>
        <button type='button' onClick={changeAddFormState}>Add new task</button>
        <button type='button'>Edit Project</button>
        <button type='button' onClick={() => props.deleteProject(thisProject)}>Delete Project</button>
        {addFormActive && <TaskForm handleClick={changeAddFormStateV2} />}
      </div>
  )
} 

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(Project);

// create element for list of tasks?