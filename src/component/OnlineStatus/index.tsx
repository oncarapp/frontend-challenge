export interface OnlineStatusProps {
  isOnline: boolean;
}

const OnlineStatus = (props: OnlineStatusProps) => {

  const { isOnline } = props

  return (
    <span className={isOnline ? 'online' : 'offline'} />
  )
}

OnlineStatus.defaultProps = {
  isOnline: false
}

export default OnlineStatus