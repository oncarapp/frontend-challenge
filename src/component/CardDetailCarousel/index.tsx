import CardDetail from 'component/CardDetail'
import Carousel from 'component/Carousel'
import anime from 'animejs'
import { useEffect, useRef } from 'react'

export type CardDetailCardPropInterface = {
  title: string
  link: string
}

export interface CardDetailCarouselProps {
  cards: CardDetailCardPropInterface[]
}

const CardDetailCarousel = (props: CardDetailCarouselProps) => {

  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const { cards } = props

  const animateHandler = () => {
    anime({
      targets: containerRef.current.querySelector('.slick-track')?.childNodes,
      translateX: [30, 0],
      opacity: [0, 1],
      delay: anime.stagger(100)
    })
  }

  useEffect(() => {
    animateHandler()
  }, [cards])

  return (
    <div ref={containerRef}>
      <Carousel>
        {
          cards.map((card, index) => (
            <div key={index} className="mr-5 cursor-move">
              <CardDetail 
                title={card.title}
                link={card.link}
              />
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}

export default CardDetailCarousel