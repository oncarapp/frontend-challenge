import React, { Fragment } from 'react'
import MainMenu from 'component/MainMenu'
import MainMenuMobile from 'component/MainMenuMobile'

interface LayoutMainProps {
  children: React.ReactNode
}

const LayoutMain = (props: LayoutMainProps) => {

  const { children } = props

  return (
    <Fragment>
      <aside className="hidden md:block fixed h-full">
        <MainMenu />
      </aside>
      { children }
      <MainMenuMobile />
    </Fragment>
  )
}

export default LayoutMain