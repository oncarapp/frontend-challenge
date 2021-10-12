import { Link, useLocation } from 'react-router-dom'

export interface MainMenuLinkProps {
  to: string
  iconName: string
}

const MainMenuLink = (props: MainMenuLinkProps) => {

  const { to, iconName } = props

  const { pathname } = useLocation()

  return (
    <Link to={to}>
      {
        pathname == to
        ?
        <img
          src={`/asset/image/icon/${iconName}--primary.svg`}
          className="main-menu-icon"
        />
        :
        <img
          src={`/asset/image/icon/${iconName}--white.svg`}
          className="main-menu-icon"
        />
      }
    </Link>
  )
}

export default MainMenuLink