import React, { useState } from "react";
import "./KanbanBoard.css";
import Card from "./Card";

function KanbanBoard({ setTasks, tasks }) {
  const [newTask, setNewTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState("");
  const [newPriority, setNewPriority] = useState('medium');
  const [newDeadline, setNewDeadline] = useState('');

  console.log('newDeadlinenewDeadline',newDeadline)
  
  const handlePriorityChange = (e) => {
    setNewPriority(e.target.value);
  };
  
  const handleDeadlineChange = (e) => {
    setNewDeadline(e.target.value);
  };

  const handleNewTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
  
    const newTaskObject = {
      id: Date.now(),
      text: newTask,
      status: 'backlog',
      priority: newPriority,
      deadline: newDeadline,
    };
  
    setTasks([...tasks, newTaskObject]);
    setNewTask('');
    setNewPriority('medium');
    setNewDeadline('');
  };
  

  const handleEditTask = (taskId) => {
    setEditTaskId(taskId);
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditedTaskText(taskToEdit.text);
  };

  const moveTask = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  const deleteTodo = (e, taskId) => {
    const NewTasks = tasks?.filter((val) => val.id !== taskId);
    setTasks(NewTasks);
  };

  const handleUpdateTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editTaskId ? { ...task, text: editedTaskText } : task
    );
    setTasks(updatedTasks);
    setEditTaskId(null);
  };

  const handleCancelEdit = () => {
    setEditTaskId(null);
    setEditedTaskText("");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newStatus) => {
    const taskId = e.dataTransfer.getData("taskId");
    moveTask(parseInt(taskId), newStatus);
  };

  return (
    <div className="flex flex-col justify-center mt-8">
    <div className="add-task">
    <input
      type="text"
      placeholder="Task Name"
      value={newTask}
      onChange={handleNewTaskChange}
    />
    <select value={newPriority} onChange={handlePriorityChange}>
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
    <input
      type="date"
      value={newDeadline}
      onChange={handleDeadlineChange}
    />
    <button onClick={handleAddTask}>Create Task</button>
  </div>
  
      <div className="kanban-board">
        <div
          className="column"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "backlog")}
        >
          <h2>Backlog</h2>
          <div className="task-list">
            {tasks
              .filter((task) => task.status === "backlog")
              .map((task) => (
                <Card
                  handleEditTask={handleEditTask}
                  deleteTodo={deleteTodo}
                  task={task}
                  editTaskId={editTaskId}
                  setEditedTaskText={setEditedTaskText}
                  handleDragStart={handleDragStart}
                  editedTaskText={editedTaskText}
                  handleUpdateTask={handleUpdateTask}
                  handleCancelEdit={handleCancelEdit}
                />
              ))}
          </div>
        </div>

        <div
          className="column"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "todo")}
        >
          <h2>Todo</h2>
          <div className="task-list">
            {tasks
              .filter((task) => task.status === "todo")
              .map((task) => (
                <Card
                  handleEditTask={handleEditTask}
                  deleteTodo={deleteTodo}
                  task={task}
                  editTaskId={editTaskId}
                  setEditedTaskText={setEditedTaskText}
                  handleDragStart={handleDragStart}
                  editedTaskText={editedTaskText}
                  handleUpdateTask={handleUpdateTask}
                  handleCancelEdit={handleCancelEdit}
                />
              ))}
          </div>
        </div>
        <div
          className="column"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "ongoing")}
        >
          <h2>Ongoing</h2>
          <div className="task-list">
            {tasks
              .filter((task) => task.status === "ongoing")
              .map((task) => (
                <Card
                  handleEditTask={handleEditTask}
                  deleteTodo={deleteTodo}
                  task={task}
                  editTaskId={editTaskId}
                  setEditedTaskText={setEditedTaskText}
                  handleDragStart={handleDragStart}
                  editedTaskText={editedTaskText}
                  handleUpdateTask={handleUpdateTask}
                  handleCancelEdit={handleCancelEdit}
                />
              ))}
          </div>
        </div>
        <div
          className="column"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "done")}
        >
          <h2>Done</h2>
          <div className="task-list">
            {tasks
              .filter((task) => task.status === "done")
              .map((task) => (
                <Card
                  handleEditTask={handleEditTask}
                  deleteTodo={deleteTodo}
                  task={task}
                  editTaskId={editTaskId}
                  setEditedTaskText={setEditedTaskText}
                  handleDragStart={handleDragStart}
                  editedTaskText={editedTaskText}
                  handleUpdateTask={handleUpdateTask}
                  handleCancelEdit={handleCancelEdit}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KanbanBoard;
