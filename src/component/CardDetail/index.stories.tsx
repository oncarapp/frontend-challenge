import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CardDetail from 'component/CardDetail'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Example/CardDetail',
  component: CardDetail,
  decorators: [
    Story => (
      <Router>
        <Story />
      </Router>
    )
  ]
} as ComponentMeta<typeof CardDetail>

const Template: ComponentStory<typeof CardDetail> = args => <CardDetail {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Desenvolvimento Web',
  link: '#'
}

export const CustomTextLink = Template.bind({})
CustomTextLink.args = {
  title: 'Engenharia',
  link: '#',
  linkText: 'Acessar task'
}
