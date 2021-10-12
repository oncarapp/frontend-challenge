describe('Drag and Drop', () => {

  const PROJECT_ID = '79c5de61-0c71-4e80-96a3-eaca201d3cbb'
  const TODO_ID = '43e0f5f6-16d0-46fa-bf9c-c57def2b5e56'
  const DOING_ID = '68cb6a0d-9cbb-4d08-bf7e-2e121359b951'

  function move(boardId, direction, position){
    cy.get(`[data-rbd-droppable-id="${boardId}"] li`)
      .eq(position)
      .trigger('keydown', { keyCode: 32 })
      .trigger('keydown', { keyCode: direction, force: true })
      .wait(500)
      .trigger('keydown', { keyCode: 32, force: true })
  }

  beforeEach(function () {
    cy.visit(`/project/${PROJECT_ID}`)
  })

  it('Should move tasks between boards.', () => {
    move(TODO_ID, 38, 1)
    move(TODO_ID, 39, 0)
    move(DOING_ID, 37, 0)
  })
})