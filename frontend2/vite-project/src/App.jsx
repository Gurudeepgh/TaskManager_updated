
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Assuming TaskList and TaskForm are in the same directory
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css'; // Assuming App.css exists
const baseURL = 'http://localhost:3000'; // Replace with your actual port
axios.defaults.baseURL = baseURL;

function App() {
  const [tasks, setTasks] = useState([]); // Initialize tasks with an empty array
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/api/tasks');
        setTasks(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []); 
  const addTask = async (task) => {
    try {
      const response = await axios.post('/api/tasks', task)
      setTasks([...tasks, response.data])
    } catch (err) {
      setError(err.message)
    }
  }

  const updateTask = async (id, updatedTask) => {
    try {
      const response = await axios.patch(`/api/tasks/${id}`, updatedTask)
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)))
    } catch (err) {
      setError(err.message)
    }
  }

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`)
      setTasks(tasks.filter((task) => task._id !== id))
    } catch (err) {
      setError(err.message)
    }
  }
  return (
    <div className="app">
      <h1>Task Management App</h1>
      {/* {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>} */}
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
