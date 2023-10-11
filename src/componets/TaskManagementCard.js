import React, { useState } from 'react';
import TaskList from './TaskList';

function TaskManagement() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [taskInputs, setTaskInputs] = useState({
    name: '',
    priority: 'medium',
    deadline: '',
  });
  const [backlogTasks, setBacklogTasks] = useState([]);
  const [todoTasks, setTodoTasks] = useState([]);
  const [ongoingTasks, setOngoingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
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

  console.log("todotask", todoTasks);

  return (
    <div className="flex flex-col justify-center mt-8">
      <div className="bg-gray-200 p-4 rounded-lg">
        {isFormVisible ? (
          <div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mt-4">
              <input
                type="text"
                name="name"
                placeholder="Task Name"
                value={taskInputs.name}
                onChange={handleChange}
              />
              <select
                name="priority"
                value={taskInputs.priority}
                onChange={handleChange}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <input
                type="date"
                name="deadline"
                value={taskInputs.deadline}
                onChange={handleChange}
              />
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded"
                onClick={handleCreateTask}
              >
                Create Task
              </button>
            </div>
          </div>
        ) : (
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded"
            onClick={() => setIsFormVisible(true)}
          >
            Create Task
          </button>
        )}
      </div>

      <div className="flex flex-row mt-4">
        <div className="w-1/4 mr-4">
          <div className="bg-gray-400 h-[300px] p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-center">Backlog</h3>
            <TaskList tasks={backlogTasks} />
          </div>
        </div>
        <div className="w-1/4 mr-4">
          <div className="bg-blue-400 h-[300px] p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-center">To Do</h3>
            <TaskList tasks={todoTasks} />

          </div>
        </div>
        <div className="w-1/4 mr-4">
          <div className="bg-yellow-400 h-[300px] p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-center">Ongoing</h3>
            <TaskList tasks={ongoingTasks} />
          </div>
        </div>
        <div className="w-1/4">
          <div className="bg-green-400 p-4 h-[300px] rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-center">Done</h3>
            <TaskList tasks={doneTasks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskManagement;
