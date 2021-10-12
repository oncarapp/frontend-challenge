import { ProjectListType } from "types"

const getCategoriesFromList = (boards: ProjectListType) => {

  const categories: string[] = []

  boards.forEach(({ category }) => {
    if(!categories.includes(category)){
      categories.push(category)
    }
  })

  return categories
}

export default {
  getCategoriesFromList
}