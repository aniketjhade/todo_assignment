import React from 'react';

function TaskList({ tasks }) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Created Tasks:</h3>
      {tasks.map((task, index) => (
        <div key={index} className="border rounded p-4 mb-4 shadow-lg">
          <p className="font-bold text-xl">{task.name}</p>
          <p>Priority: {task.priority}</p>
          <p>Deadline: {task.deadline}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
