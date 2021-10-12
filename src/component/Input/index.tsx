import classNames from 'classnames'
import Button from 'component/Button'

export interface InputPropsInterface {
  withButton?: boolean
  buttonText?: string
  placeholder?: string
  type?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined
  value?: string | number
}

const Input = (props: InputPropsInterface) => {

  const { 
    withButton,
    buttonText,
    placeholder,
    value,
    onChange
  } = props

  const inputClass = classNames('input input-body form-element', {
    'input-rounded': !withButton,
    'input-rounded-left': withButton
  })

  return (
    <div className="flex items-center">
      <input 
        className={inputClass}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {
        withButton &&
        <div>
          <Button>
            { buttonText }
          </Button>
        </div>
      }
    </div>
  )
}

Input.defaultProps = {
  withButton: false,
  type: 'button'
}

export default Input