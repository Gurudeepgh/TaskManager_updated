import React, { useState } from 'react';
import './Form.css'; 
const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('New task added:', data);
        // Optionally update state or notify parent component
      })
      .catch(error => console.error('Error adding task:', error));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Description"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
        <button className="form-button" type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
