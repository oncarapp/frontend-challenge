import Slider from 'component/Slider'
import React from 'react'

export interface CarouselProps {
  children: React.ReactNode
}

const CardDetailCarousel = (props: CarouselProps) => {

  const { children } = props

  return (
    <Slider
      settings={{
        dots: false,
        arrows: false,
        swipeToSlide: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        variableWidth: true
      }}
    >
      { children }
    </Slider>
  )
}

export default CardDetailCarousel