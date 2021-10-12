import React from 'react'

export interface TaskBodyProps {
  children: React.ReactNode
}

const TaskBody = (props: TaskBodyProps) => {

  const { children } = props

  return (
    <div className="task-body">
      { children }
    </div>
  )
}

export default TaskBody