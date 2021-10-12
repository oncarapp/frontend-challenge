import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import User from 'component/User'

export default {
  title: 'Example/User',
  component: User
} as ComponentMeta<typeof User>

const Template: ComponentStory<typeof User> = args => <User {...args} />

export const UserOnline = Template.bind({})
UserOnline.args = {
  isOnline: true,
  name: 'John Doe',
  profileImageUrl: 'https://uifaces.co/our-content/donated/gPZwCbdS.jpg'
}

export const UserOffline = Template.bind({})
UserOffline.args = {
  isOnline: false,
  name: 'John Doe',
  profileImageUrl: 'https://uifaces.co/our-content/donated/gPZwCbdS.jpg'
}

export const UserWithoutProfileImage = Template.bind({})
UserWithoutProfileImage.args = {
  isOnline: true,
  name: 'John Doe'
}