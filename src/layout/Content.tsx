import React from 'react'
import Topbar from 'component/Topbar'
import classNames from 'classnames'

interface LayoutContentProps {
  children: React.ReactNode,
  className?: string,
  mobileTopbarHidden: boolean
}

const LayoutContent = (props: LayoutContentProps) => {

  const { children, className, mobileTopbarHidden } = props

  return (
    <div className={classNames('md:ml-28 p-7 flex flex-col flex-grow', className)}>
      <header className={classNames({
        'hidden md:block': mobileTopbarHidden
      })}>
        <Topbar />
      </header>
      <main className="flex flex-col flex-grow">
        { children }
      </main>
    </div>
  )
}

LayoutContent.defaultProps = {
  className: '',
  mobileTopbarHidden: false
}

export default LayoutContent