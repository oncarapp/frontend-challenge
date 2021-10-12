export interface TaskInterface {
  createdAt: string
  name: string
  description: string
  position: number
  priority: TaskPriority
  tags: string[]
}

export interface BoardInterface {
  id: string
  createdAt?: string
  name: string
  position: number
  cards: TaskInterface[]
}

export interface ProjectInterface {
  createdAt: string
  name: string
  category: string
  columns: BoardInterface[]
  id?: string | undefined
}

export type ProjectListType = ProjectInterface[]
export type ProjectType = ProjectInterface

export interface ProjectPageParams {
  id: string
}

export enum TaskPriority {
  High = 'high',
  Medium = 'medium',
  Low = 'low'
}