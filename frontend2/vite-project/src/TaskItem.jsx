import { useState, memo } from 'react'
import './TaskItem.css'

const TaskItem = memo(({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTask, setEditedTask] = useState(task)

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleCancelClick = () => {
    setIsEditing(false)
    setEditedTask(task)
  }

  const handleSaveClick = () => {
    updateTask(task._id, editedTask)
    setIsEditing(false)
  }

  const handleDeleteClick = () => {
    deleteTask(task._id)
  }

  const handleInputChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value })
  }

  return (
    <li className="task-item">
      {isEditing ? (
        <div className="edit-task">
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            value={editedTask.description}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="dueDate"
            value={editedTask.dueDate}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick} className="cancel">
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick} className="delete">
            Delete
          </button>
        </div>
      )}
    </li>
  )
})

export default TaskItem