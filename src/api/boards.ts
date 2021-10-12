import request from 'lib/request'
import { ProjectType, ProjectListType } from 'types'

const all = async () => {
  return await request.get<ProjectListType>('/boards')
}

const update = async (id: string, boards: ProjectType) => {
  return await request.patch<ProjectType>(`/boards/${id}`, boards)
}

const getById = async (id: string) => {
  return await request.get<ProjectType>(`/boards/${id}`)
}

const search = async (query: string, params: any) => {
  return await request.get<ProjectListType>(`/boards?q=${query}`, { params })
}

const searchByCategory = async (category: string) => {
  return await request.get<ProjectListType>(`/boards?category_like=${category}`)
}

const createBoard = async (id: string, data: ProjectType) => {
  return await request.put<ProjectType>(`/boards/${id}`, data)
}

export default {
  all,
  update,
  createBoard,
  getById,
  search,
  searchByCategory
}