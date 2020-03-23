import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import TaskComponent from '../Task/Task';
import TaskForm from '../TaskForm/TaskForm';
import ProjectEditForm from '../ProjectEditForm/ProjectEditForm';
import { setProjectActive } from '../../redux/actionCreators';
import '../../styles/project.sass';

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
  const [editFormActive, setEditForm] = useState(false);
  let { name } = useParams();
  let thisProject = props.projects.find(elem => elem.name === name);  // render error page if undefined
  props.setCurrentProject(thisProject);
  console.log(thisProject.isDeadline());

  function changeAddFormState() {
    if (editFormActive) return;
    setAddForm(!addFormActive);
  }
  
  function changeEditFormState() {
    if (addFormActive) return;
    setEditForm(!editFormActive);
  }

  return (
      <div className='project-element' id={thisProject.name}>
        <h2>Project: {thisProject.name}</h2>
        <div className='project-description'>
          <div className='project-description-title'>
            <p>Description:</p>
          </div>
          <div className='project-description-content'>
            <p>{thisProject.description}</p>
          </div>
          <div className='project-description-title'>
            <p>Due date:</p>
          </div>
          <div className='project-description-content'> 
            <p><time>{thisProject.dueDate.toDateString()}</time>;
            Left: {thisProject.daysLeft()} day{thisProject.daysLeft() !== 1 && <span>s</span>}.
            {thisProject.isDeadline() && <span style={{color: 'red'}}>Deadline!</span>}
            </p>
          </div>
          <div className='project-description-title'>
            <p>Importance:</p>
          </div>
          <div className='project-description-content'> 
            <p>{thisProject.importance}</p>
          </div>
        </div>
        <button id='add-task-button' className='add-task-button' type='button' onClick={changeAddFormState}>Add new task</button>
        <button id='edit-project-button' className='edit-task-button' type='button' onClick={changeEditFormState}>Edit Project</button>
        {addFormActive && <TaskForm handleClick={changeAddFormState} />}
        {editFormActive && <ProjectEditForm handleClick={changeEditFormState}/>}
        <div className='list-of-tasks'> 
          <h3>Tasks:</h3>  
          <ul>
            {thisProject.tasks.length === 0
              ? <span>None</span>
              : thisProject.tasks.map(task => {
                return <TaskComponent task={task} />
              }) }
          </ul>
        </div>
        
      </div>
  )
} 

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(Project);

// create element for list of tasks?