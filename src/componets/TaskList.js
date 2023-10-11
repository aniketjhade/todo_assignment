import React, { useState } from 'react';

function TaskList({ tasks }) {

    // const newTasks = tasks?.map((val, index)=> { return { id:index+1, ...val}});
  

  return (
    <>
    <p className="task" draggable="true">Get groceries</p>
    </>
  );
}

export default TaskList;
