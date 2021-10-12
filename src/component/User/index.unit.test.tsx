import React from 'react'
import { render, screen } from '@testing-library/react'
import User from 'component/User'
import faker from 'faker'

test('Should user have a name.', () => {

  const fakeName: string = faker.name.findName()

  render(<User name={fakeName} />)

  const name = screen.getByText(fakeName)
  expect(name).toHaveTextContent(fakeName)

})

test('Should user to be online.', () => {

  const fakeName: string = faker.name.findName()

  render(<User name={fakeName} isOnline />)

  const isOnline = screen.getByText(/online/i)
  expect(isOnline).toBeTruthy()

})

test('Should user to be offline.', () => {

  const fakeName: string = faker.name.findName()

  render(<User name={fakeName} isOnline={false} />)

  const isOffline = screen.getByText(/offline/i)
  expect(isOffline).toBeTruthy()

})

test('Should user profile image html tag have a title attribute.', () => {

  const fakeName: string = faker.name.findName()
  const fakeAvatar: string = faker.image.avatar()

  render(<User 
    name={fakeName}
    profileImageUrl={fakeAvatar}
  />)

  const element = screen.getAllByTitle(fakeName)
  expect(element[0]).toHaveAttribute('title', fakeName)

})

test('Should user have a profile image.', () => {

  const fakeName: string = faker.name.findName()
  const fakeAvatar: string = faker.image.avatar()

  render(<User 
    name={fakeName}
    profileImageUrl={fakeAvatar}
  />)

  const element = screen.getAllByTitle(fakeName)
  expect(element[0]).toHaveAttribute('src', fakeAvatar)

})