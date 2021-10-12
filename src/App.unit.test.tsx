import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('Should display home page with welcome message.', () => {

  render(<App />)

  const welcomeMessage = screen.getByText(/Olá, seja bem vindo!/i)
  expect(welcomeMessage).toBeInTheDocument()

  const title = screen.getByText(/Se divirta com a nossa forma de gerenciar./i)
  expect(title).toBeInTheDocument()

})

test('Should home page show user profile on the topbar.', () => {

  render(<App />)
  const element = screen.getByText(/John Doe/i)
  expect(element).toBeInTheDocument()

})

test('Should home page have an input to search projects.', () => {

  const { container } = render(<App />)
  const element = container.getElementsByClassName('input-search-body')
  expect(element.length).toBe(1)

})

test('Should home page have a categories section.', () => {

  render(<App />)
  const element = screen.getByText(/Categories/i)
  expect(element).toBeInTheDocument()

})
