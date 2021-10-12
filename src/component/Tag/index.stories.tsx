import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Tag from 'component/Tag'

export default {
  title: 'Example/Tag',
  component: Tag
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />

export const TagActive = Template.bind({})
TagActive.args = {
  text: 'Engenharia',
  active: true
}

export const TagNotActive = Template.bind({})
TagNotActive.args = {
  text: 'Engenharia',
  active: false
}