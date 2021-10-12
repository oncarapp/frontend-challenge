import LayoutMain from 'layout/Main'
import PageTitle from 'component/PageTitle'
import SearchByCategory from 'container/SearchByCategory'
import TagCarousel from 'container/TagCarousel'
import CardDetailCarousel from 'component/CardDetailCarousel'
import LayoutContent from 'layout/Content'
import useBoardCategories from 'hook/useBoardCategories'
import { useEffect, useState } from 'react'
import boardService from 'service/boards'
import { ProjectListType } from 'types'
import { ALL_CATEGORY } from 'config/constants'
import NoResult from 'component/NoResult'

const Home = () => {

  const [category, setCategory] = useState(ALL_CATEGORY)
  const [boards, setBoards] = useState<ProjectListType>([])

  const categories = useBoardCategories()

  const onChoiceCategory = (category: string) => {
    setCategory(category)
  }

  const searchBoardsByCategory = async (category: string) => {
    const data = await boardService.searchByCategory(category)
    setBoards(data)
  }

  useEffect(() => {
    searchBoardsByCategory(category)
  }, [category])

  return (
    <LayoutMain>
      <LayoutContent className="bg-white md:bg-gray-50 min-h-screen">
        <PageTitle 
          title='Se divirta com a nossa forma de gerenciar.'
          subtitle='Olá, seja bem vindo!'
        />
        <section className="py-8">
          <SearchByCategory 
            category={category}
            onResult={setBoards}
          />
        </section>
        <section>
          <h2 className="section-title">
            Categories
          </h2>
          <div className="my-5">
            <TagCarousel 
              tags={[ALL_CATEGORY, ...categories]} 
              activeTag={category}
              onClick={onChoiceCategory}
            />
          </div>
          <div className="mt-8">
            {
              !boards.length
              ?
              <NoResult
                message="Nenhum quadro no momento"
              />
              :
              <CardDetailCarousel 
                cards={boards.map(board => ({
                  title: board.name,
                  link: `/project/${board.id}`
                }))}
              />
            }
          </div>
        </section>
      </LayoutContent>
    </LayoutMain>
  )
}

export default Home