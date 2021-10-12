export interface ButtonProps {
  children: React.ReactNode
  onClick?: (any?: any) => any
}

const Button = (props: ButtonProps) => {

  const { children, onClick } = props

  return (
    <button
      className="button button-rounded"
      onClick={onClick}
    >
      { children }
    </button>
  )
}

Button.defaultProps = {
  onClick: () => {}
}

export default Button