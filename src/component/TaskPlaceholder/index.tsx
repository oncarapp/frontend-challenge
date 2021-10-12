import anime from 'animejs'
import React, { useEffect, useRef } from 'react'

const TaskPlaceholder = () => {

  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const barRef = useRef() as React.MutableRefObject<HTMLSpanElement>

  const animateHandler = () => {
    anime({
      targets: containerRef.current,
      translateY: [50, 0],
      opacity: [0, 1]
    })
    anime({
      targets: barRef.current,
      translateY: [30, 0],
      opacity: [0, 1],
      delay: 300
    })
  }

  useEffect(() => {
    animateHandler()
  }, [])

  return (
    <div ref={containerRef}>
      <div className="h-36 bg-gray-100 rounded-md p-6">
        <span ref={barRef} className="block bg-gray-200 h-5 rounded-md w-20"></span>
      </div>
    </div>
  )
}

export default TaskPlaceholder