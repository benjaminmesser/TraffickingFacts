import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Page2 from './views/page2'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<Page2 />} exact path="/page2" />
        <Route element={<NotFound />} path="**" />
        <Redirect to="**" />
      </Routes>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
