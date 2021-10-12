export interface TaskTitleProps {
  title: string
}

const TaskTitle = (props: TaskTitleProps) => {

  const { title } = props

  return (
    <p className="task-title">
      { title }
    </p>
  )
}

export default TaskTitle