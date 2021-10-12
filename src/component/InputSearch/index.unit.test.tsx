import React from 'react'
import { render, screen } from '@testing-library/react'
import faker from 'faker'
import { shallow } from 'enzyme'

import InputSearch from 'component/InputSearch'

test('Should InputSearch have onChange() called.', () => {

  const onChangeMock = jest.fn()
  const fakeValue: string = faker.lorem.words()
  
  const wrapper = shallow(
    <InputSearch 
      onChange={onChangeMock} 
      value=""
    />
  )

  wrapper.find('input').simulate('change', { target: { value: fakeValue } })

  expect(onChangeMock).toBeCalledTimes(1)

})

test('Should InputSearch have specific value when value is set.', () => {

  const onChangeMock = jest.fn()
  const fakeValue: string = faker.lorem.words()
  
  const { container } = render(
    <InputSearch 
      onChange={onChangeMock} 
      value={fakeValue}
    />
  )

  const element = container.querySelector('input')

  expect(element).toHaveValue(fakeValue)

})

test('Should InputSearch have a specific placeholder.', () => {

  const placeholder: string = 'Busque por projetos'

  render(<InputSearch placeholder={placeholder} onChange={() => {}} />)

  const element = screen.getByText(placeholder)
  expect(element).toHaveTextContent(placeholder)
})

test('Should InputSearch have a specific value.', () => {

  const value: string = 'Engenharia'

  const { container } = render(<InputSearch value={value} onChange={() => {}} />)

  const element = container.querySelector('input')
  expect(element).toHaveValue(value)

})

test('Should InputSearch have button to click.', () => {

  const { container } = render(
    <InputSearch value="Desenvolvimento" onChange={() => {}} />
  )

  const element = container.querySelector('button')
  expect(element).toBeTruthy()
  
})

test('Should InputSearch have button with icon image inside.', () => {

  const { container } = render(
    <InputSearch value="Desenvolvimento" onChange={() => {}} />
  )

  const element = container.querySelector('button')
  expect(element).toContainHTML('img')
  
})