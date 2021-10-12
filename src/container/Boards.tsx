import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'
import BoardCard from 'component/BoardCard'
import BoardHeader from 'component/BoardHeader'
import TaskCard from 'component/TaskCard'
import TaskBody from 'component/TaskBody'
import TaskTitle from 'component/TaskTitle'
import TaskDescription from 'component/TaskDescription'
import TaskTags from 'component/TaskTags'
import { BoardInterface, ProjectType, TaskInterface, TaskPriority } from 'types'
import { useEffect, useState } from 'react'
import TaskPlaceholder from 'component/TaskPlaceholder'
import ModalCreateCard from 'container/ModalCreateCard'
import CreateBoard from 'container/CreateBoard'
import UserList from 'component/UserList'

export interface BoardsProps {
  boards: ProjectType
  onBoardUpdate: (boards: ProjectType) => void
  onBoardCreate?: (id: string, boards: ProjectType, newBoard: { name: string }) => void
  onCardCreate?: (card: { name: string, priority: TaskPriority, tags: string[] }) => any
  onShowCard?: (card: TaskInterface) => any
}

const Boards = (props: BoardsProps) => {

  const { 
    boards,
    onBoardUpdate,
    onBoardCreate,
    onCardCreate,
    onShowCard } = props

  const [boardList, setBoardList] = useState(boards)
  const [isOpenCreateBoardForm, setIsOpenCreateBoardForm] = useState(false)
  const [isOpenCreateTaskModal, setIsOpenCreateTaskModal] = useState(false)

  const onDragEnd = (result: DropResult) => {

    if(!result.destination){
      return
    }

    /**
     * Deep cloning of columns to avoid side effects
     */
    const columns: BoardInterface[] = JSON.parse(JSON.stringify(boardList.columns))

    /**
     * Source and Destination droppables id's
     */
    const droppableIdSource = result.source.droppableId
    const droppableIdDest = result.destination?.droppableId

    const dest = result.destination
    const source = result.source
    const type = result.type

    if(type == 'BOARDS'){

      const [boardItem] = columns.splice(source.index, 1) as BoardInterface[]
      columns.splice(dest?.index!, 0, boardItem)
      setBoardList({
        ...boardList,
        columns
      })

    } else {
      
      const columnSourceIndex = columns.findIndex(({ id }) => id == droppableIdSource)
      const columnDestinationIndex = columns.findIndex(({ id }) => id == droppableIdDest)
  
      /**
       * Find columns
       */
      const columnSource = columns.find(({ id }) => id == droppableIdSource)
      const columnDestination = columns.find(({ id }) => id == droppableIdDest)
  
      /**
       * Get dropping item and remove it from source droppable
       */
      const [itemSource] = columnSource?.cards?.splice(result.source.index, 1) as TaskInterface[]
  
      /**
       * Add the dropping item removed from source to correct destination index
       */
      columnDestination?.cards?.splice(result?.destination!.index, 0, itemSource)
  
      /**
       * Update the columns using column indexes
       */
      columns[columnSourceIndex] = columnSource as BoardInterface
      columns[columnDestinationIndex] = columnDestination as BoardInterface
    }

    /**
     * Update the state with new columns
     */
    
    const newState = {
      ...boardList,
      columns
    }

    setBoardList(newState)

    /**
     * onBoardUpdate add the possibility to parent container 
     * manage other logics when drag and drops change, like save/update database.
     * This logic abstraction makes this container reusable in other scenarios.
     */
    if(onBoardUpdate){
      onBoardUpdate(newState)
    }
  }

  const toggleCreateBoardForm = () => {
    setIsOpenCreateBoardForm(!isOpenCreateBoardForm)
  }

  const createBoard = ({ name }: { name: string }) => {

    if(!name){
      alert('Informe o nome do board.')
      return
    }

    const hasBoardName = boardList.columns.find(board => 
      board.name.toLowerCase() == name.toLowerCase()
    )

    if(hasBoardName){
      alert('Esse board já existe.')
      return 
    }

    if(onBoardCreate){
      onBoardCreate(boardList.id!, boardList, {
        name
      })
    }
  }

  const showCard = (card: TaskInterface) => {
    if(onShowCard){
      onShowCard(card)
    }
  }

  useEffect(() => {
    setBoardList(boards)
  }, [boards])

  return (
    <div className="overflow-x-auto overflow-y-hidden flex flex-col flex-grow">

      {
        isOpenCreateTaskModal && 
        <ModalCreateCard 
          onClose={() => setIsOpenCreateTaskModal(false)}
          onSubmit={onCardCreate}
        />
      }
      
      <div className="flex">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="boards" type="BOARDS" direction="horizontal">
            {boardsProvided => (
              <div
                ref={boardsProvided.innerRef}
                {...boardsProvided.droppableProps}
                className="flex"
              >
                {boardList?.columns?.map((board, index) => (
                  <Draggable key={board.id} draggableId={board.id} index={index}>
                    {boardDraggableProvided => (
                      <div
                        className="mr-4"
                        {...boardDraggableProvided.draggableProps}
                        ref={boardDraggableProvided.innerRef}
                      >
                        <BoardCard>
                          <div {...boardDraggableProvided.dragHandleProps}>
                            <BoardHeader 
                              title={board.name}
                              withButton
                              onClickButton={() => setIsOpenCreateTaskModal(true)}
                            />
                          </div>
                          <Droppable droppableId={board.id} type={`CARDS`} key={`card-${index}`}>
                            {(cardsDroppableId, snapshot) => (
                              <div
                                ref={cardsDroppableId.innerRef}
                                {...cardsDroppableId.droppableProps}
                              >
                                {
                                  !board?.cards.length && !snapshot.isDraggingOver &&
                                  <TaskPlaceholder />
                                }
                                <ol className="relative">
                                  {board.cards.map((card, index) => (
                                    <Draggable 
                                      key={card.name}
                                      draggableId={card.name}
                                      index={index}
                                    >
                                      {cardDraggableProvided => (
                                        <li 
                                          ref={cardDraggableProvided.innerRef}
                                          {...cardDraggableProvided.draggableProps}
                                          {...cardDraggableProvided.dragHandleProps}
                                          className="mb-4"
                                          onClick={() => showCard(card)}
                                        >
                                          <TaskCard>
                                            <TaskBody>
                                              <div>
                                                {
                                                  card.tags && card.tags.length &&
                                                  <div className="table mb-3">
                                                    <TaskTags 
                                                      tags={card.tags} 
                                                      priority={card.priority} 
                                                    />
                                                  </div>
                                                }
                                              </div>
                                              <div className="mb-2">
                                                <TaskTitle title={card.name} />
                                              </div>
                                              <div className="mb-4">
                                                <TaskDescription description={card.description} />
                                              </div>
                                              <div className="flex justify-between">
                                                <div></div>
                                                <div>
                                                  <UserList />
                                                </div>
                                              </div>
                                            </TaskBody>
                                          </TaskCard>
                                        </li>
                                      )}
                                    </Draggable>
                                  ))}
                                </ol>
                                <div className='bg-gray-100 rounded-lg'>
                                  { cardsDroppableId.placeholder }
                                </div>
                              </div>
                            )}
                          </Droppable>
                          <div className="mt-4">
                            <button onClick={() => {
                              setIsOpenCreateTaskModal(true)
                            }} className="board-task-add">
                              <img
                                src="/asset/image/icon/plus--purple.svg"
                                alt="+"
                                className="w-2 h-2"
                              />
                              <span>
                                Add new
                              </span>
                            </button>
                          </div>
                        </BoardCard>
                      </div>
                    )}
                  </Draggable>
                ))}
                { boardsProvided.placeholder }
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {
          boards && boards.name &&
          <div>
            <BoardCard>
              <BoardHeader 
                title="Adicionar nova lista" 
                withButton={false}
              />
              <button 
                className="text-primary"
                onClick={toggleCreateBoardForm}
              >
                {
                  isOpenCreateBoardForm
                  ?
                  'Cancelar'
                  :
                  'Criar lista'
                }
              </button>
              {
                isOpenCreateBoardForm &&
                <CreateBoard 
                  onSubmit={createBoard}
                />
              }
            </BoardCard>
          </div>
        }
      </div>
    </div>
  )
}

export default Boards