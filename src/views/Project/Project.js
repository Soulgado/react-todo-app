import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import TaskComponent from '../Task/Task';
import TaskForm from '../TaskForm/TaskForm';
import { setProjectActive } from '../../redux/actionCreators';

const mapStateToProps = state => {
  return {projects: state.projects}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    setCurrentProject: (thisProject) => dispatch(setProjectActive(thisProject))
  }
}

function Project(props) {
  const [addFormActive, setAddForm] = useState(false);
  let { name } = useParams();
  let thisProject = props.projects.find(elem => elem.name === name);

  function changeAddFormState() {
    props.setCurrentProject(thisProject);
    setAddForm(!addFormActive);
  } 

  function changeAddFormStateV2() {
    setAddForm(!addFormActive);
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
                return <TaskComponent task={task} />
              }) }
          </ul>
        </div>
        <button type='button' onClick={changeAddFormState}>Add new task</button>
        <button type='button'>Edit Project</button>
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