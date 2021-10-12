import React from 'react'
import { ComponentMeta } from '@storybook/react'

import MainMenu from 'component/MainMenu'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Example/MainMenu',
  component: MainMenu,
  decorators: [
    Story => (
      <Router>
        <Story />
      </Router>
    )
  ]
} as ComponentMeta<typeof MainMenu>

const Template = () => <MainMenu />

export const Default = Template.bind({})

