import Button from 'component/Button'
import Chips from 'component/Chips'
import Input from 'component/Input'
import Modal from 'component/Modal'
import Priority from 'component/Priority'
import Select, { SelectItemsProp } from 'component/Select'
import React, { useState } from 'react'
import { TaskPriority } from 'types'

export interface ModalCreateCardProps {
  onClose: () => void
  onSubmit?: (card: { name: string, tags: string[], priority: TaskPriority }) => any
}

const ModalCreateCard = (props: ModalCreateCardProps) => {

  const { onClose, onSubmit } = props

  const [name, setName] = useState('')
  const [tags, setTags] = useState([] as string[])
  const [priority, setPriority] = useState(TaskPriority.High as TaskPriority)

  const onSubmitHandler = (e: React.FormEvent<EventTarget>) => {

    e.preventDefault()

    if(onSubmit){
      onSubmit({
        name,
        tags,
        priority
      })
    }
  }

  const onSelectPriorityHandler = (data: SelectItemsProp) => {

    const { value } = data

    if(value == TaskPriority.High){
      setPriority(value)
    }

    if(value == TaskPriority.Medium){
      setPriority(value)
    }

    if(value == TaskPriority.Low){
      setPriority(value)
    }

  }

  return (
    <Modal onClose={onClose}>
      <div className="p-12 py-8 create-card-modal">
        <div className="space-y-4">
          <div>
            <label className="text-primary text-sm block mb-1">
              Name
            </label>
            <Input 
              placeholder="Ex: Button Component"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-primary text-sm block mb-1">
              Tags relacionadas
            </label>
            <Chips 
              onUpdate={setTags}
            />
          </div>
          <div>
            <label className="text-primary text-sm block mb-1">
              Priority color
            </label>
            <Select
              items={[
                {
                  item: <Priority priority={TaskPriority.High} text="Prioridade Alta" />,
                  value: TaskPriority.High
                },
                {
                  item: <Priority priority={TaskPriority.Medium} text="Prioridade Média" />,
                  value: TaskPriority.Medium
                },
                {
                  item: <Priority priority={TaskPriority.Low} text="Prioridade Baixa" />,
                  value: TaskPriority.Low
                }
              ]}
              onSelect={onSelectPriorityHandler} 
            />
          </div>
          <div>
            <Button onClick={onSubmitHandler}>
              Criar
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

ModalCreateCard.defaultProps = {
  onSubmit: () => {}
}

export default ModalCreateCard