import React from 'react';

function TaskList({ tasks }) {

    const newTasks = tasks?.map((val, index)=> { return { id:index+1, ...val}});

  return (
    <div className="mt-4" >
      {newTasks?.map((task, index) => (
        <div key={task.id} className="border rounded p-4 mb-4 shadow-lg" draggable onDragStart={(e,data)=> console.log(e,data)}>
          <p className="font-bold text-xl">{task.name}</p>
          <p>Priority: {task.priority}</p>
          <p>Deadline: {task.deadline}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
