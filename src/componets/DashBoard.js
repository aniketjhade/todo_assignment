import React from 'react'
import Navbar from './Navbar'
import TaskManagementCard from './TaskManagementCard'
import TaskCreationForm from './TaskCreationForm'

const DashBoard = () => {
  return (
    <div>
      <Navbar />
      <TaskCreationForm />
      <TaskManagementCard />
      
    </div>
  )
}

export default DashBoard
