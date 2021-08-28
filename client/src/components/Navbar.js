import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bulma/css/bulma.min.css'

import Home from '../pages/Home'
import CompanyList from '../pages/CompanyList'

const Navbar = () => {
  return (
    <>
      <Router>
        <nav className='navbar is-light'>
          <div id='navbarBasicExample' className='navbar-menu'>
            <div className='navbar-start'>
              <li className='navbar-item'>
                <Link to='/'>Inicio</Link>
              </li>
              <li className='navbar-item'>
                <Link to='/companies'>Empresas</Link>
              </li>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path='/companies'>
            <CompanyList />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default Navbar
