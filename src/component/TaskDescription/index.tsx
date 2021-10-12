export interface TaskDescriptionProps {
  description: string
}

const TaskDescription = (props: TaskDescriptionProps) => {

  const { description } = props

  return (
    <p className="task-description">
      { description }
    </p>
  )
}

export default TaskDescription