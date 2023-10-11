import React, { useState } from 'react';
import TaskList from './TaskList';
import './style.css'
import KanbanBoard from './KanbanBoard';

function TaskManagement({tasks,setTasks}) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [taskInputs, setTaskInputs] = useState({
    name: '',
    priority: 'medium',
    deadline: '',
  });
  const [backlogTasks, setBacklogTasks] = useState([]);

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskInputs({
      ...taskInputs,
      [name]: value,
    });
  };

  const handleCreateTask = () => {
    if (!taskInputs.name || !taskInputs.deadline) {
      setError('Task name and deadline are required.');
      return;
    }

    const newTask = {
      name: taskInputs.name,
      priority: taskInputs.priority,
      deadline: taskInputs.deadline,
      stage: 0, // 0 represents Backlog
    };

    setBacklogTasks([...backlogTasks, newTask]);

    setTaskInputs({
      name: '',
      priority: 'medium',
      deadline: '',
    });

    setError('');
  };

 

  return (
    
     <KanbanBoard setTasks={setTasks} tasks={tasks} />
    
  );
}

export default TaskManagement;
