import { useState, useEffect } from 'react';
function useFetch(endpoint) {
  const [taskInform, setTaskInform] = useState([]);
  useEffect(() => {
    if (!endpoint) return;
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Something went wrong`);
        }
        return response.json();
      })
      .then((data) => setTaskInform(data))
      .catch((error) => console.error(error.message));
  }, [endpoint]);
  function newTaskList(newTask) {
    return fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', //it specifies the type of object being sent(am telling the server am sending it in json format)
      },
      body: JSON.stringify(newTask), //it contains the actual data you are sending in the request.
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add task');
        }
        return response.json();
      })
      .then((data) => {
        setTaskInform((prevTasks) => [...prevTasks, data]);
      })
      .catch((error) => console.error(error.message));
  }

  return { taskInform, newTaskList };
}
export default useFetch;
