import React from 'react'
import { ComponentMeta } from '@storybook/react'

import Topbar from 'component/Topbar'

export default {
  title: 'Example/Topbar',
  component: Topbar
} as ComponentMeta<typeof Topbar>

const Template = () => <Topbar />

export const Default = Template.bind({})