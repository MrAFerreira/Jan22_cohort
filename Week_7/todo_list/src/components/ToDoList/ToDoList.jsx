// src/components/ToDoList.js

import { useState } from 'react';
import Task from '../Task/Task';
import Summary from '../Summary/Summary';

const initialTasks = [
  {
    _id: '1a',
    name: 'Task1',
    description: 'Do something important',
    isDone: false,
  },
  {
    _id: '2b',
    name: 'Task2',
    description: 'Do something important',
    isDone: false,
  },
  {
    _id: '3c',
    name: 'Task3',
    description: 'Do something important',
    isDone: false,
  },
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const toggleTaskDone = (id) => {
    const tasksCopy = [...tasks];

    tasksCopy.forEach((task) => {
      if (task._id === id) {
        task.isDone = !task.isDone;
        if (task.isDone) {
          setTasksCompleted((prevTasksCompleted) => prevTasksCompleted + 1);
        } else {
          setTasksCompleted((prevTasksCompleted) => prevTasksCompleted - 1);
        }
      }
    });
    setTasks(tasksCopy);
  };

  return (
    <div>
      <Summary tasksCompleted={tasksCompleted} />

      <div className="todo-container">
        {tasks.map((task) => (
          <Task key={task._id} task={task} toggleDone={toggleTaskDone} />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
