import React from 'react';
import TaskList from './TaskList';

function TaskManagementCard({ backlogTasks }) {
  return (
    <div className="flex justify-center mt-8">
    <div className="w-1/4 mr-4">
    {/* Backlog Card */}
    <div className="bg-gray-400 h-[300px] p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2 text-center">Backlog</h3>
      <h1>hello</h1>
    </div>
  </div>

      <div className="w-1/4 mr-4">
        {/* To Do Card */}
        <div className="bg-blue-400 h-[300px] p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-center">To Do</h3>
          {/* Add tasks from To Do here */}
        </div>
      </div>

      <div className="w-1/4 mr-4">
        {/* Ongoing Card */}
        <div className="bg-yellow-400 h-[300px] p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-center">Ongoing</h3>
          {/* Add tasks from Ongoing here */}
        </div>
      </div>

      <div className="w-1/4">
        {/* Done Card */}
        <div className="bg-green-400 p-4 h-[300px] rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-center">Done</h3>
          {/* Add tasks from Done here */}
        </div>
      </div>
    </div>
  );
}

export default TaskManagementCard;



