import User from 'component/User'
import { useContext } from 'react'
import { TopbarContext } from 'context/Topbar'

const Topbar = () => {

  const { title } = useContext(TopbarContext)

  return (
    <div className="topbar flex items-center bg-white mb-3 md:mb-8 md:p-3 md:px-5">
      {
        title &&
        <div className="px-5 md:px-0">
          <p className="topbar-title">
            { title }
          </p>
        </div>
      }
      <div className="mr-auto md:mr-0 md:ml-auto">
        <User 
          name="John Doe"
          profileImageUrl="https://uifaces.co/our-content/donated/gPZwCbdS.jpg"
          isOnline
        />
      </div>
    </div>
  )
}

export default Topbar