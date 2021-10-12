import React from 'react'
import classNames from 'classnames'

export interface InputSearchProps {
  value?: string | number
  placeholder?: string
  dark?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined
}

const InputSearch = (props: InputSearchProps) => {

  const { value, onChange, placeholder, dark } = props

  const inputClass = classNames('input-search-body outline-none', {
    'dark': dark
  })

  const placeholderClass = classNames('input-search-placeholder absolute transform -translate-y-1/2 top-1/2 left-16 md:left-20', {
    'dark': dark
  })

  return (
    <div className="input-search-container">
      <input
        className={inputClass}
        value={value}
        onChange={onChange}
      />
      <button className="input-search-button absolute transform -translate-y-1/2 top-1/2 left-6 md:left-10">
        <img 
          src={`/asset/image/icon/search--${dark ? 'white' : 'primary'}.svg`} 
          alt=""
          title={placeholder} 
        />
      </button>
      {
        !value &&
        <span className={placeholderClass}>
          { placeholder }
        </span>
      }
    </div>
  )
}

InputSearch.defaultProps = {
  value: '',
  placeholder: 'Busque',
  onChange: undefined,
  dark: false
}

export default InputSearch