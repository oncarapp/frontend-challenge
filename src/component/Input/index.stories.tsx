import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Input from 'component/Input'

export default {
  title: 'Example/Input',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const Default = Template.bind({})