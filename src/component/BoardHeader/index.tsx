export interface BoardHeaderProps {
  title: string
  withButton?: boolean
  onClickButton?: () => void
}

const BoardHeader = (props: BoardHeaderProps) => {

  const { title, withButton, onClickButton } = props

  return (
    <div className="flex items-center justify-between mb-4">
      <p className="board-title">
        {title}
      </p>
      {
        withButton &&
        <button onClick={onClickButton}>
          <img
            src="/asset/image/icon/plus--black.svg"
            alt="Add task"
            title="Add task"
          />
        </button>
      }
    </div>
  )
}

BoardHeader.defaultProps = {
  withButton: true
}

export default BoardHeader