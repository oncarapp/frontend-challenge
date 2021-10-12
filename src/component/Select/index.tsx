import React, { useState } from 'react'

export interface SelectItemsProp {
  item?: React.ReactNode | string
  value: string
}

export interface SelectProps {
  items: SelectItemsProp[]
  onSelect?: (value: SelectItemsProp) => void
}

const Select = (props: SelectProps) => {

  const { items, onSelect } = props

  const [valueSelected, setValueSelected] = useState(items[0]?.value || '' as string)
  const [selectIsOpen, setSelectIsOpen] = useState(false)

  const onSelectHandler = (item: SelectItemsProp) => {

    if(onSelect){
      onSelect(item)
    }
    
    setSelectIsOpen(false)
    setValueSelected(item.value)
  }

  const openSelect = () => {
    setSelectIsOpen(!selectIsOpen)
  }

  return (
    <div className="relative">
      
      <button onClick={openSelect} className="w-full form-element flex items-center justify-between px-2">
        <span>
          { items.find(item => item.value == valueSelected)?.item || items[0]?.item }
        </span>
      </button>
      {
        selectIsOpen &&
        <div className="absolute top-0 p-2 bg-white rounded-md shadow-md w-full space-y-3">
          {items.map((item, index) => (
            <li 
              onClick={() => onSelectHandler(item)} 
              key={index} 
              className="flex items-center cursor-pointer"
            >
              {item.item}
            </li>
          ))}
        </div>
      }
    </div>
  )
}

export default Select