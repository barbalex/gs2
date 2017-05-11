import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
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

class App extends Component {
  render() {
    return (
      <Router>
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
                      <Link to="leitbild" activeClassName="active">
                        Leitbild
                      </Link>
                    </li>
                    <li>
                      <Link to="projekte" activeClassName="active">
                        Projekte
                      </Link>
                    </li>
                    <li>
                      <Link to="technologien" activeClassName="active">
                        Technologien
                      </Link>
                    </li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                    <li className="kontaktNav">
                      <Link to="kontakt" activeClassName="active">
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
      </Router>
    )
  }
}

export default App
