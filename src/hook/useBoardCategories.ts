import { useState, useEffect } from 'react'
import boardsService from 'service/boards'
import boardLib from 'lib/board'

export type UseBoardCategoriesType = string[]

const useBoardCategories = (): UseBoardCategoriesType => {

  const [categories, setCategories] = useState<UseBoardCategoriesType>([] as UseBoardCategoriesType)

  const getCategories = async () => {
    const data = await boardsService.all()
    setCategories(boardLib.getCategoriesFromList(data))
  }

  useEffect(() => {
    getCategories()
  }, [])

  return categories
}

export default useBoardCategories