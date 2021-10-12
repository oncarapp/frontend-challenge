import React from 'react'
import { render, screen } from '@testing-library/react'
import PageTitle from 'component/PageTitle'
import faker from 'faker'

test('Should PageTitle have a title without subtitle.', () => {

  const fakeTitle: string = faker.lorem.words()

  render(<PageTitle title={fakeTitle} />)

  const element = screen.getByText(fakeTitle)
  expect(element).toHaveTextContent(fakeTitle)

})

test('Should PageTitle have title and subtitle.', () => {

  const fakeTitle: string = faker.lorem.words()
  const fakeSubtitle: string = faker.lorem.words()

  render(<PageTitle title={fakeTitle} subtitle={fakeSubtitle} />)

  const titleElement = screen.getByText(fakeTitle)
  expect(titleElement).toHaveTextContent(fakeTitle)

  const subtitleElement = screen.getByText(fakeSubtitle)
  expect(subtitleElement).toHaveTextContent(fakeSubtitle)

})