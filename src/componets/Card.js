import React from "react";

function Card({ ...props }) {
  const {
    handleEditTask,
    handleDragStart,
    deleteTodo,
    task,
    editTaskId,
    editedTaskText,
    handleUpdateTask,
    handleCancelEdit,
    left,
    setEditedTaskText,
  } = props;

  console.log('task',task)
  return (
    <div>
      <div
        key={task.id}
        className="task"
        draggable
        onDragStart={(e) => handleDragStart(e, task.id)}
      >
        <button
          className="close-button"
          onClick={(e) => deleteTodo(e, task.id)}
        >
          ✕
        </button>
        {editTaskId === task.id ? (
          <div>
            <input
              type="text"
              value={editedTaskText}
              onChange={(e) => setEditedTaskText(e.target.value)}
            />
            <button onClick={handleUpdateTask}>Update</button>
            <button onClick={handleCancelEdit}>Cancel</button>
            <div className="flex justify-between">
              <div onClick={left}>left</div>
              <div>right</div>
            </div>
          </div>
        ) : (
            <div>
            <span>{task.text}</span>
            <div>
              <strong>Date: </strong>{task.deadline} {/* Display the date */}
            </div>
            <div>
              <strong>Priority: </strong>{task.priority} {/* Display the priority */}
            </div>
            <button onClick={() => handleEditTask(task.id)}>Edit</button>
            <div className='flex justify-between'>
              <div>left</div>
              <div>right</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
