import React from 'react'
import { render } from '@testing-library/react'

import MainMenuLink from 'component/MainMenuLink'
import { BrowserRouter as Router } from 'react-router-dom'

test('Should MainMenuLink have image tag.', () => {

  const { container } = render(
    <Router>
      <MainMenuLink to="/" iconName="home" />
    </Router>
  )
  const element = container.querySelector('img')
  expect(element).toBeTruthy()

})

test('Should MainMenuLink have a specific path.', () => {

  const fakeUrl: string = '/'

  const { container } = render(
    <Router>
      <MainMenuLink to="/" iconName="home" />
    </Router>
  )
  const element = container.querySelector('a')
  expect(element).toHaveAttribute('href', fakeUrl)

})