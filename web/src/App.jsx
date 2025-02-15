import { Routes, Route, Link } from 'react-router';
import { useState } from 'react';
import TaskList from './components/domains/task/TaskList/TaskList';
import NewTask from './pages/NewTask';
import './App.css';
function App() {
  const [taskInform, setTaskInform] = useState([
    {
      id: 1,
      projectName: 'Re-work UI/UX',
      priority: 'low',
      dueDate: '12/05/2025',
      assignee: 'Said & Rachel',
      project: 'Time App',
    },
    {
      id: 2,
      projectName: 'Dark mode toggle',
      priority: 'high',
      dueDate: '09/03/2025',
      assignee: 'Umair & Precious',
      project: 'Asa Dark-mode Feature',
    },
    {
      id: 3,
      projectName: 'Accessibility check',
      priority: 'medium',
      dueDate: '15/04/2025',
      assignee: 'Michel & Ricardo',
      project: 'Timer App',
    },
    {
      id: 4,
      projectName: 'Notification Integration',
      priority: 'high',
      dueDate: '11/03/2025',
      assignee: 'Ebetsam & Deborah',
      project: 'Timer App',
    },
  ]);
  function newTaskList(event, projectName, project, assignee) {
    event.preventDefault();
    setTaskInform((prevtask) => [
      ...prevtask,
      {
        id: 5,
        projectName,
        dueDate: new Date().toLocaleDateString(),
        project,
        assignee,
        priority: 'high',
      },
    ]);
  }
  return (
    <>
      <div className="Container">
        <div className="link-container">
          <div>
            <img src="/Migracode Logo 1.png" alt="Migracode Logo" />
          </div>
          <Link to="/" className="link-newtask">
            Task Manager
          </Link>
          <br />
          <Link to="/new-task">Add Task</Link>
          <br />
          <Link to="*">Project View</Link>
        </div>
        <div>
          <h1>Task Manager</h1>
          <Routes>
            <Route path="/" element={<TaskList tasks={taskInform} />} />

            <Route
              path="/new-task"
              element={<NewTask handleNewTask={newTaskList} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
