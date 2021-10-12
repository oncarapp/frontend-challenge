import Button from "component/Button"
import Input from "component/Input"
import React, { useState } from "react"

export interface CreateBoardProps {
  onSubmit: (props: { name: string }) => any
}

const CreateBoard = (props: CreateBoardProps) => {

  const { onSubmit } = props

  const [boardName, setBoardName] = useState('')

  const setBoardNameHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setBoardName(e.currentTarget.value)
  }

  const onSubmitHandler = (e: React.SyntheticEvent) => {

    e.preventDefault()

    if(onSubmit){
      onSubmit({
        name: boardName
      })
    }

    setBoardName('')
  }

  return (
    <div className="mt-4">
      <form onSubmit={onSubmitHandler} className="space-y-4">
        <div>
          <label className="text-primary">
            Nome do quadro
          </label>
          <Input
            placeholder="Ex: To Do"
            onChange={setBoardNameHandler}
            value={boardName}
          />
        </div>
        <div>
          <Button>
            Criar
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CreateBoard