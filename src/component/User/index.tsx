import OnlineStatus from 'component/OnlineStatus'

export interface UserProps {
  name: string
  isOnline?: boolean
  profileImageUrl?: string
}

const User = (props: UserProps) => {

  const { name, isOnline, profileImageUrl } = props

  return (
    <div className="flex space-x-4 items-center">
      <div className="leading-tight">
        <span className="profile-username text-right">
          { name }
        </span>
        <span className="profile-online text-right">
          { isOnline ? 'Online' : 'Offline' }
        </span>
      </div>
      <div className="relative w-9 h-9 bg-gray-400 rounded-full">
        <img
          src={profileImageUrl || `https://ui-avatars.com/api/?name=${name}`}
          alt=""
          title={name}
          className="w-full h-full object-cover rounded-full"
        />
        <div className="absolute bottom-0 right-0">
          <OnlineStatus 
            isOnline={isOnline}
          />
        </div>
      </div>
    </div>
  )
}

User.defaultProps = {
  isOnline: false
}

export default User