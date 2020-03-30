import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import TaskComponent from '../Task/Task';
import TaskForm from '../TaskForm/TaskForm';
import ProjectEditForm from '../ProjectEditForm/ProjectEditForm';
import { deleteTask, changeProject, addNewTaskToProject } from '../../redux/actionCreators';
import '../../styles/project.sass';

const mapStateToProps = state => {
  return {projects: state.projects}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    deleteTaskFromProj: (project, task) => dispatch(deleteTask(project, task)),
    changeProject: (project, formData) => dispatch(changeProject(project, formData)),
    addTask: (project, formData) => dispatch(addNewTaskToProject(project, formData))
  }
}

function Project(props) {
  // this component controls every change in this project
  // it passes different handlers as props
  const [addFormActive, setAddForm] = useState(false);
  const [editFormActive, setEditForm] = useState(false);
  let { name } = useParams();
  let thisProject = props.projects.find(elem => elem.name === name);  // render error page if undefined

  function changeAddFormState() {
    if (editFormActive) return;
    setAddForm(!addFormActive);
  }
  
  function changeEditFormState() {
    if (addFormActive) return;
    setEditForm(!editFormActive);
  }

  function deleteTask(task) {
    props.deleteTaskFromProj(thisProject, task);
  }

  function changeThisProject(formData) {
    changeEditFormState();
    props.changeProject(thisProject, formData)
  }

  function addTaskToProject(formData) {
    changeAddFormState();
    props.addTask(thisProject, formData);
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
          <div className='project-description-title'>
            <p>Done:</p>
          </div>
          <div className='project-description-content'>
            <p>{String(thisProject.isDone)}</p>
          </div>
        </div>
        <button id='add-task-button' className='add-button'
            type='button' onClick={changeAddFormState}>Add new task</button>
        <button id='edit-project-button' className='edit-button'
            type='button' onClick={changeEditFormState}>Edit Project</button>
        {addFormActive && <TaskForm handleClick={addTaskToProject} />}
        {editFormActive && <ProjectEditForm project={thisProject} handleClick={changeThisProject}/>}
        <div className='list-of-tasks'> 
          <h3>Tasks:</h3>  
          <ol>
            {thisProject.tasks.length === 0
              ? <span>None</span>
              : thisProject.tasks.map(task => {
                return (
                    <TaskComponent key={task.name} task={task} handleDelete={deleteTask} />
                )  
              })}
          </ol>
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