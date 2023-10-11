import React from 'react'
import Navbar from './Navbar'
import TaskManagementCard from './TaskManagementCard'
import TaskCreationForm from './TaskCreationForm'

const DashBoard = () => {
  return (
    <div>
      <Navbar />
      <TaskManagementCard />
      
    </div>
  )
}

export default DashBoard
