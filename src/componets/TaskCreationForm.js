import React, { useState } from "react";
import TaskList from "./TaskList";

function TaskCreationForm() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [taskInputs, setTaskInputs] = useState({
    name: "",
    priority: "medium",
    deadline: "",
  });

  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskInputs({
      ...taskInputs,
      [name]: value,
    });
  };

  const handleCreateTask = () => {
    if (!taskInputs.name || !taskInputs.deadline) {
      setError("Task name and deadline are required.");
      return;
    }

    const newTask = {
      name: taskInputs.name,
      priority: taskInputs.priority,
      deadline: taskInputs.deadline,
      stage: 0,
    };

    setTasks([...tasks, newTask]);

    setTaskInputs({
      name: "",
      priority: "medium",
      deadline: "",
    });

    setError("");
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="w-1/4 mr-4">
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
              <TaskList tasks={tasks} />
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
      </div>
    </div>
  );
}

export default TaskCreationForm;
