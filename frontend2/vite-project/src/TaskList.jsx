import { memo } from 'react'
import TaskItem from './TaskItem'
import './TaskList.css'

const TaskList = memo(({ tasks, updateTask, deleteTask }) => {
  return (
    <div className="task-list">
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  )
})

export default TaskList