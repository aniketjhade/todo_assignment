import React, { useState } from 'react'
import Navbar from './Navbar'
import TaskManagementCard from './TaskManagementCard'
import TaskCreationForm from './TaskCreationForm'

const DashBoard = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Navbar tasks={tasks} />
      <TaskManagementCard tasks={tasks} setTasks={setTasks}/>
      
    </div>
  )
}

export default DashBoard
