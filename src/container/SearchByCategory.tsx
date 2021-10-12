import InputSearch from 'component/InputSearch'
import { useCallback, useState } from 'react'
import boardService from 'service/boards'
import debounce from 'lodash.debounce'
import { ProjectListType } from 'types'

export interface SearchByCategoryInterface {
  category: string
  onResult: (result: ProjectListType) => any
}

const SearchByCategory = (props: SearchByCategoryInterface) => {

  const { category, onResult } = props

  const [search, setSearch] = useState('')

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearch(value)
    searchHandlerDebounced(value, category)
  }

  const searchHandler = async (search: string, category: string) => {
    
    const result = await boardService.search(search, { category })

    if(onResult){
      onResult(result)
    }
  }

  const searchHandlerDebounced = useCallback(debounce(searchHandler, 200), [])

  return (
    <InputSearch
      placeholder="Busque por projetos"
      onChange={onChangeHandler}
      value={search}
    />
  )
}

export default SearchByCategory