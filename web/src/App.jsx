import { Routes, Route } from 'react-router';
import useFetch from './hooks/useFetch';

import TaskList from './pages/TaskList/TaskList';
import NewTask from './pages/NewTask';

import './App.css';
import NavigationLayout from './layout/NavigationLayout';
console.log('useFetch:', useFetch);
function App() {
  const { taskInform, newTaskList } = useFetch('/api/tasks');

  return (
    <>
      <div className="Container">
        <div className="link-container">
          <div>
            <img src="/Migracode Logo 1.png" alt="Migracode Logo" />
          </div>
          <NavigationLayout />
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
