import React from 'react'
import { render, screen } from '@testing-library/react'
import CardDetail from 'component/CardDetail'
import faker from 'faker'
import { BrowserRouter as Router } from 'react-router-dom'

test('Should CardDetail have a specific title.', () => {

  const fakeTitle: string = faker.lorem.words()
  const fakeLink: string = faker.internet.url()

  render(
    <Router>
      <CardDetail title={fakeTitle} link={fakeLink} />
    </Router>
  )

  const element = screen.getByText(fakeTitle)
  expect(element).toHaveTextContent(fakeTitle)

})

test('Should CardDetail have a specific link text.', () => {

  const fakeTitle: string = faker.lorem.words()
  const fakeLink: string = faker.internet.url()
  const fakeLinkText: string = faker.lorem.word()

  render(
    <Router>
      <CardDetail 
        title={fakeTitle} 
        link={fakeLink}
        linkText={fakeLinkText}
      />
    </Router>
  )

  const element = screen.getByText(fakeLinkText)
  expect(element).toHaveTextContent(fakeLinkText)

})

test('Should CardDetail have a specific href link.', () => {

  const fakeTitle: string = faker.lorem.words()
  const fakeLink: string = '/project/1'
  const fakeLinkText: string = faker.lorem.word()

  render(
    <Router>
      <CardDetail 
        title={fakeTitle} 
        link={fakeLink}
        linkText={fakeLinkText}
      />
    </Router>
  )

  const element = screen.getByText(fakeLinkText)
  expect(element).toHaveAttribute('href', fakeLink)

})