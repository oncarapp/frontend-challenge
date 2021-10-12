import React from 'react'
import Slick, { Settings } from 'react-slick'

export interface SliderProps {
  children: React.ReactNode,
  settings: Settings
}

const Slider = (props: SliderProps) => {

  const { settings, children } = props

  return (
    <Slick {...settings}>
      { children }
    </Slick>
  )
}

Slider.defaultProps = {
  settings: {}
}

export default Slider