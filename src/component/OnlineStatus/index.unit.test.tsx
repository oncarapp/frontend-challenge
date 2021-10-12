import React from 'react'
import { render } from '@testing-library/react'
import OnlineStatus from 'component/OnlineStatus'

test('Should OnlineStatus have class=online.', () => {

  const { container } = render(<OnlineStatus isOnline={true} />)

  const element = container.querySelector('span')
  expect(element).toHaveClass('online')

})

test('Should OnlineStatus have class=offline.', () => {

  const { container } = render(<OnlineStatus isOnline={false} />)

  const element = container.querySelector('span')
  expect(element).toHaveClass('offline')

})

test('Should OnlineStatus have isOnline=false as default.', () => {

  const { container } = render(<OnlineStatus />)

  const element = container.querySelector('span')
  expect(element).toHaveClass('offline')

})