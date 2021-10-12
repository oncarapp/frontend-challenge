import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PageTitle from 'component/PageTitle'

export default {
  title: 'Example/PageTitle',
  component: PageTitle
} as ComponentMeta<typeof PageTitle>

const Template: ComponentStory<typeof PageTitle> = args => <PageTitle {...args} />

export const WithTitleAndSubtitle = Template.bind({})
WithTitleAndSubtitle.args = {
  title: 'Se divirta com a nossa forma de gerenciar.',
  subtitle: 'Olá, seja bem vindo!'
}

export const JustTitle = Template.bind({})
JustTitle.args = {
  title: 'Se divirta com a nossa forma de gerenciar.'
}