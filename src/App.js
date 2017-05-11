import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Navbar from 'react-bootstrap/lib/Navbar'

import manageNavbarToggleVisibility
  from './modules/manageNavbarToggleVisibility'

import Public from './components/Public'
import Leitbild from './components/Leitbild'
import Projekte from './components/Projekte'
import Technologien from './components/Technologien'
import Kontakt from './components/Kontakt'
import FourOhFour from './components/FourOhFour'

manageNavbarToggleVisibility()

const App = ({ location }) => (
  <div>
    <div className="header">
      <Navbar inverse fixedTop>
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">
                Toggle navigation
              </span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to="/" className="navbar-brand">
              Gabriel Software
            </Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link
                  to="leitbild"
                  className={location.pathname === '/leitbild' ? 'active' : ''}
                >
                  Leitbild
                </Link>
              </li>
              <li>
                <Link
                  to="projekte"
                  className={location.pathname === '/projekte' ? 'active' : ''}
                >
                  Projekte
                </Link>
              </li>
              <li>
                <Link
                  to="technologien"
                  className={
                    location.pathname === '/technologien' ? 'active' : ''
                  }
                >
                  Technologien
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="kontaktNav">
                <Link
                  to="kontakt"
                  className={location.pathname === '/kontakt' ? 'active' : ''}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </div>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Public} />
        <Route path="/leitbild" component={Leitbild} />
        <Route path="/projekte" component={Projekte} />
        <Route path="/technologien" component={Technologien} />
        <Route path="/kontakt" component={Kontakt} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </div>
)

export default withRouter(App)
