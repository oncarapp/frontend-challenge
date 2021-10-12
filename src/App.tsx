import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import HomePage from 'page/Home'
import FavoritePage from 'page/Favorite'
import ProjectPage from 'page/Project'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" children={<HomePage />} exact />
        <Route path="/favorites" children={<FavoritePage />} />
        <Route path="/project/:id" children={<ProjectPage />} />
      </Switch>
    </Router>
  )
}

export default App
