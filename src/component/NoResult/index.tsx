import anime from 'animejs'
import { useRef, useEffect } from 'react'
import classNames from 'classnames'

export interface NoResultProps {
  message: string
  animate: boolean
}

const NoResult = (props: NoResultProps) => {

  const messageRef = useRef() as React.MutableRefObject<HTMLParagraphElement>

  const { message, animate } = props

  const animateHandler = () => {

    const animation = anime({
      targets: messageRef.current,
      translateY: [10, 0],
      opacity: [0, 1]
    })

    if(animate){
      animation.play()
    }

  }

  useEffect(() => {
    animateHandler()
  }, [])

  return (
    <div className="relative py-16">
      <p ref={messageRef} className={classNames('text-primary text-center', { 'opacity-0': !animate })}>
        { message }
      </p>
    </div>
  )
}

NoResult.defaultProps = {
  animate: true
}

export default NoResult