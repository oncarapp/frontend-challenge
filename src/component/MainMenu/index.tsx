import MainMenuLink from 'component/MainMenuLink'

const MainMenu = () => {

  return (
    <nav className="main-menu">
      <ul className="py-4">
        <li className="py-7 flex justify-center">
          <MainMenuLink to="/" iconName="home" />
        </li>
        <li className="py-7 flex justify-center">
          <MainMenuLink to="/favorites" iconName="heart" />
        </li>
        <li className="py-7 flex justify-center">
          <MainMenuLink to="/project" iconName="edit" />
        </li>
        <li className="py-7 flex justify-center">
          <MainMenuLink to="/profile" iconName="user" />
        </li>
      </ul>
    </nav>
  )
}

export default MainMenu