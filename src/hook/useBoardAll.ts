import { useState, useEffect } from 'react'
import boardsService from 'service/boards'
import { ProjectListType } from 'types'

const useBoardAll = (): ProjectListType => {

  const [board, setBoard] = useState<ProjectListType>({} as ProjectListType)

  const getBoard = async () => {
    const data = await boardsService.all()
    setBoard(data)
  }

  useEffect(() => {
    getBoard()
  }, [])

  return board
}

export default useBoardAll