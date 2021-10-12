import Overlay from "component/Overlay"

export interface DrawerProps {
  children: React.ReactNode
  title?: string,
  onClose: () => any
}

const Drawer = (props: DrawerProps) => {

  const { children, title, onClose } = props

  return (
    <div className="fixed top-0 left-0 w-full" style={{ zIndex: 9999 }}>
      <Overlay />
      <div className="drawer-container">
        <div className="relative overflow-y-auto h-full">
          <div className="drawer-header drawer-body sticky top-0">
            <div>
              {
                title &&
                <p className="drawer-title">
                  { title }
                </p>
              }
            </div>
            <div>
              <button onClick={onClose}>
                <img src="/asset/image/icon/close--gray.svg" alt="X" title="Fechar" />
              </button>
            </div>
          </div>
          <div className="drawer-body">
            { children }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawer