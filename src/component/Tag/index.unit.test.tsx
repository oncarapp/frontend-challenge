import React from 'react'
import { render, screen } from '@testing-library/react'
import Tag from 'component/Tag'
import faker from 'faker'

test('Should tag have a specific text.', () => {

  const fakeText: string = faker.lorem.word()

  render(<Tag text={fakeText} />)

  const element = screen.getByText(fakeText)
  expect(element).toHaveTextContent(fakeText)

})

test('Should Tag with active=false prop have bg-light-blue className.', () => {

  const fakeText: string = faker.lorem.word()

  render(<Tag text={fakeText} active={false} />)

  const element = screen.getByText(fakeText)
  expect(element).toHaveClass('bg-light-blue')

})

test('Should Tag with active=true prop have bg-black className.', () => {

  const fakeText: string = faker.lorem.word()

  render(<Tag text={fakeText} active={true} />)

  const element = screen.getByText(fakeText)
  expect(element).toHaveClass('bg-black')

})
