import Priority from 'component/Priority'
import { TaskPriority } from 'types'

export interface TaskTagsProps {
  tags: string[]
  priority: TaskPriority
}

const TaskTags = (props: TaskTagsProps) => {

  const { tags, priority } = props

  return (
    <ul className="flex space-x-1">
    {
      tags.map(tag => (
        <li key={tag}>
          <Priority priority={priority} text={tag} />
        </li>
      ))
    }
    </ul>
  )
}

export default TaskTags