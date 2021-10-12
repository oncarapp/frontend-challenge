import LayoutContent from 'layout/Content'
import LayoutMain from 'layout/Main'
import { TopbarContextProvider } from 'context/Topbar'
import { useParams } from 'react-router'
import Boards from 'container/Boards'
import { ProjectPageParams, ProjectType, TaskInterface } from 'types'
import boardService from 'service/boards'
import { useEffect, useState } from 'react'
import useBoardById from 'hook/useBoardById'
import DrawerCardInformation from 'container/DrawerCardInformation'

const Project = () => {

  const { id } = useParams<ProjectPageParams>()
  const [boards, setBoards] = useBoardById(id)
  const [cardInformation, setCardInformation] = useState({} as TaskInterface)

  const getBoards = async (id: string) => {
    const data = await boardService.getById(id)
    setBoards(data)
  }

  const updateBoard = (boards: ProjectType) => {
    boardService.update(boards)
  }

  const createBoard = async (id: string, boards: ProjectType, newBoard: { name: string }) => {
    boardService.createBoard(id, boards, newBoard)
    getBoards(id)
  }

  const showCardInformation = (card: TaskInterface) => {
    setCardInformation(card)
  }

  useEffect(() => {
  }, [boards])

  return (
    <LayoutMain>
      <TopbarContextProvider
        value={{ title: boards?.name || 'Carregando' }}
      >
        <LayoutContent className="bg-gray-100 md:bg-gray-50 min-h-screen" mobileTopbarHidden>
          {
            cardInformation.name &&
            <DrawerCardInformation card={cardInformation} />
          }
          <div className="block md:hidden mb-12 project-header">
            <p className="project-title">
              KANBAN
            </p>
            <h1 className="project-subtitle">
              { boards.name }
            </h1>
          </div>
          <Boards 
            boards={boards}
            onBoardUpdate={updateBoard}
            onBoardCreate={createBoard}
            onShowCard={showCardInformation}
            onCardCreate={card => console.log(card)}
          />
        </LayoutContent>
      </TopbarContextProvider>
    </LayoutMain>
  )
}

export default Project