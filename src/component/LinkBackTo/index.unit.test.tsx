import React from 'react'
import { render } from '@testing-library/react'

import LinkBackTo from 'component/LinkBackTo'
import { BrowserRouter as Router } from 'react-router-dom'

test('Should LinkBackTo have a specific path.', () => {

  const fakeUrl: string = '/favorites'

  const { container } = render(
    <Router>
      <LinkBackTo to={fakeUrl} />
    </Router>
  )
  const element = container.querySelector('a')
  expect(element).toHaveAttribute('href', fakeUrl)

})