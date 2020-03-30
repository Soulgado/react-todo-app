import Project from './constructors/ProjectConstructor';
import Task from './constructors/TaskConstructor';

const defaultProject = new Project('Example', 'Example project', '12-04-2020', 'Medium');
const task1 = new Task('Example Task', 'Very important task', '04-23-2020', 'Medium');
defaultProject.addTask(task1);

const defaultProject2 = new Project('JustLearning', 'Just learning different stuff', '03-25-2020', 'High');

const defaultProject3 = new Project('CompletedProject', 'This project has already been completed', '03-25-2020', 'Low');
defaultProject3.toggleDone();

const defaultProjects = [defaultProject, defaultProject2, defaultProject3]

export default defaultProjects;