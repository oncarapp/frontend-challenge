import Overlay from 'component/Overlay'
import anime from 'animejs'
import { useEffect, useRef } from 'react'

export interface ModalProps {
  onClose: () => void
  children: React.ReactNode
}

const Modal = (props: ModalProps) => {

  const { onClose, children } = props

  const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const animateHandler = () => {
    anime({
      targets: modalRef.current,
      translateY: [50, 0],
      scale: [0.9, 1],
      opacity: [0, 1],
      delay: 150
    })
  }

  useEffect(() => {
    animateHandler()
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
      <div onClick={onClose} className="cursor-pointer">
        <Overlay />
      </div>
      <div className="fixed">
        <div ref={modalRef} className="opacity-0 bg-white rounded-md shadow-lg">
          { children }
        </div>
      </div>
    </div>
  )
}

export default Modal