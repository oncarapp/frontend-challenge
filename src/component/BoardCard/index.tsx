import React from 'react'

export interface BoardCardProps {
  children: React.ReactNode
}

const BoardCard = (props: BoardCardProps) => {

  const { children } = props

  return (
    <div className="board-card">
      { children }
    </div>
  )
}

export default BoardCard