import Tag from 'component/Tag'
import Carousel from 'component/Carousel'

export interface TagCarouselProps {
  tags: string[]
  activeTag?: string
  onClick?: (tag: string, index: number) => void
}

const TagCarousel = (props: TagCarouselProps) => {

  const { tags, activeTag, onClick } = props

  const onClickHandler = (tag: string, index: number) => {
    if(onClick){
      onClick(tag, index)
    }
  }

  return (
    <div>
      <Carousel>
        {
          tags.map((tag, index) => (
            <button 
              onClick={() => onClickHandler(tag, index)} 
              key={index}
              className="mr-5 py-2"
            >
              <Tag 
                text={tag}
                active={activeTag == tag}
              />
            </button>
          ))
        }
      </Carousel>
    </div>
  )
}

TagCarousel.defaultProps = {
  tags: []
}

export default TagCarousel