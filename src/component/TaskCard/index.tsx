import React from 'react'

export interface TaskCardProps {
  children: React.ReactNode
}

const TaskCard = (props: TaskCardProps) => {

  const { children } = props

  return (
    <div className="task-card">
      { children }
    </div>
  )
}

export default TaskCard