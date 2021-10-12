import { useState, useEffect, SetStateAction, Dispatch } from 'react'
import boardsService from 'service/boards'
import { ProjectInterface, ProjectType } from 'types'

const useBoardById = (id: string): [ProjectInterface, Dispatch<SetStateAction<ProjectType>>] => {

  const [board, setBoard] = useState<ProjectInterface>({} as ProjectInterface)

  const getBoard = async (id: string) => {
    const data = await boardsService.getById(id)
    setBoard(data)
  }

  useEffect(() => {
    getBoard(id)
  }, [])

  return [board, setBoard]
}

export default useBoardById