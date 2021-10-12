import { TaskPriority } from 'types'

export interface PriorityProps {
  priority: TaskPriority
  text: string
}

const Priority = (props: PriorityProps) => {

  const { priority, text } = props

  return (
    <span className={`priority-${priority} table`}>
      { text }
    </span>
  )
}

export default Priority