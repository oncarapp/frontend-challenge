import boardApi from 'api/boards'
import { ProjectType, ProjectListType, TaskInterface } from 'types'
import { ALL_CATEGORY } from 'config/constants'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

const all = async (): Promise<ProjectListType> => {
  try {

    const result = await boardApi.all()
    return result.data

  } catch {
    return []
  }
}

const getById = async (id: string): Promise<ProjectType> => {
  try {

    const result = await boardApi.getById(id)
    return result.data

  } catch {
    return {} as ProjectType
  }
}

const searchByCategory = async (category: string): Promise<ProjectListType> => {
  try {

    let result
    
    if(category.toLowerCase() == ALL_CATEGORY.toLowerCase()){
      result = await boardApi.all()
    } else {
      result = await boardApi.searchByCategory(category)
    }
    
    return result.data

  } catch {
    return []
  }
}

const search = async (query: string, options: any): Promise<ProjectListType> => {
  try {

    const { category } = options

    const params = {
      category_like: undefined,
      name_like: query
    }

    if(category && category.toLowerCase() != ALL_CATEGORY.toLowerCase()){
      params.category_like = category
    }

    const result = await boardApi.search(query, params)
    return result.data

  } catch {
    return []
  }
}

const update = async (boards: ProjectType): Promise<ProjectType> => {
  try {

    const result = await boardApi.update(boards.id!, boards)
    return result.data

  } catch {
    return {} as ProjectType
  }
}

const createBoard = async (
  id: string, 
  boards: ProjectType, 
  board: { name: string }): Promise<ProjectType> => {
  try {

    const data = {
      ...boards,
      columns: [...boards.columns, {
        id: uuidv4(),
        createdAt: moment().format(),
        name: board.name,
        position: boards.columns.length,
        cards: [] as TaskInterface[]
      }]
    }

    const result = await boardApi.createBoard(id, data)
    return result.data

  } catch {
    return {} as ProjectType
  }
}

export default {
  all,
  update,
  createBoard,
  getById,
  search,
  searchByCategory
}