import React from 'react'

import linuxSwImg from '../images/linux_sw.png'
import appleImg from '../images/apple.png'
import windowsImg from '../images/windows_sw.png'
import databaseImg from '../images/database.png'

const TechnologienPage = () => (
  <div id="technologien" className="page technologien not_home">
    <p className="lead">
      Mit diesen Technologien kenne ich mich aus:
    </p>
    <div className="row marketing">
      <div className="col-lg-4">
        <img src={linuxSwImg} alt="Linux" height="30" width="30" />
        <img src={appleImg} alt="MaxOs" height="30" width="30" />
        <img src={windowsImg} alt="Windows" height="30" width="30" />
        <h4>
          Betriebssysteme
        </h4>
        <ul>
          <li>
            <a
              href="http://de.wikipedia.org/wiki/Microsoft_Windows"
              target="_blank"
            >
              Windows
            </a>
          </li>
          <li>
            <a href="http://de.wikipedia.org/wiki/Ubuntu" target="_blank">
              Ubuntu Linux
            </a>
          </li>
          <li>
            <a href="http://de.wikipedia.org/wiki/Mac_OS_X" target="_blank">
              Mac OS X
            </a>
          </li>
        </ul>
        <img
          src={databaseImg}
          alt="Datenbanken"
          height="30"
          width="30"
          style={{ marginTop: 30, marginLeft: -4 }}
        />
        <h4 style={{ marginTop: 5 }}>
          Datenbanken
        </h4>
        <ul>
          <li>
            <a href="http://couchdb.apache.org" target="_blank">
              CouchDB
            </a>
          </li>
          <li>
            <a href="http://www.postgresql.org" target="_blank">
              PostgreSQL
            </a>
          </li>
          <li>
            <a href="http://www.mysql.de" target="_blank">
              MySQL
            </a>
          </li>
          <li>
            <a href="http://www.sqlite.org" target="_blank">
              SQLite
            </a>
          </li>
          <li>
            <a
              href="http://de.wikipedia.org/wiki/Microsoft_Access"
              target="_blank"
            >
              Microsoft Access
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-4">
        <div
          style={{
            fontStyle: 'oblique',
            fontSize: 16,
            fontWeight: 600,
            marginTop: 9,
            color: 'grey',
          }}
        >
          {'if ( ... ) then \u007B ... \u007D'}
        </div>
        <h4 style={{ marginTop: 3 }}>
          Programmiersprachen
        </h4>
        <ul>
          <li>
            <a href="http://en.wikipedia.org/wiki/JavaScript" target="_blank">
              JavaScript / ES6
            </a>
          </li>
          <li>
            <a
              href="http://de.wikipedia.org/wiki/JavaScript_Object_Notation"
              target="_blank"
            >
              JSON
            </a>
          </li>
          <li>
            <a
              href="http://de.wikipedia.org/wiki/Cascading_Style_Sheets"
              target="_blank"
            >
              CSS
            </a>
          </li>
          <li>
            <a
              href="http://de.wikipedia.org/wiki/Hypertext_Markup_Language"
              target="_blank"
            >
              HTML
            </a>
          </li>
          <li>
            <a href="http://de.wikipedia.org/wiki/PHP" target="_blank">
              PHP
            </a>
          </li>
          <li>
            <a href="http://de.wikipedia.org/wiki/SQL" target="_blank">
              SQL
            </a>
          </li>
          <li>
            <a
              href="http://de.wikipedia.org/wiki/Visual_Basic_for_Applications"
              target="_blank"
            >
              VBA
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-4">
        <div className="glyphicon glyphicon-wrench" style={{ fontSize: 30 }} />
        <h4 style={{ marginTop: 0 }}>
          Werkzeuge <small>(Auswahl)</small>
        </h4>
        <ul>
          <li>
            <a href="http://http://nodejs.org" target="_blank">
              node.js
            </a>
          </li>
          <li>
            <a href="http://electron.atom.io" target="_blank">
              electron
            </a>
          </li>
          <li>
            <a href="http://hapijs.com" target="_blank">
              hapi
            </a>
          </li>
          <li>
            <a href="http://gulpjs.com" target="_blank">
              gulp.js
            </a>
            &nbsp;und&nbsp;
            <a href="http://webpack.github.io" target="_blank">
              webpack
            </a>
          </li>
          <li>
            <a href="https://facebook.github.io/react" target="_blank">
              React
            </a>
          </li>
          <li>
            <a href="http://jquery.com/" target="_blank">
              jQuery
            </a>
          </li>
          <li>
            <a href="http://jquerymobile.com/" target="_blank">
              jQuery mobile
            </a>
          </li>
          <li>
            <a href="http://getbootstrap.com/" target="_blank">
              Bootstrap
            </a>
          </li>
          <li>
            <a href="http://jqueryui.com/" target="_blank">
              jQuery UI
            </a>
          </li>
          <li>
            <a href="http://docs.couchdb.org/en/1.6.1/couchapp" target="_blank">
              CouchApp
            </a>
          </li>
          <li>
            <a href="http://openlayers.org/" target="_blank">
              OpenLayers
            </a>
          </li>
          <li>
            <a
              href="http://www.geo.admin.ch/internet/geoportal/de/home/services/geoservices/display_services/api_services.html"
              target="_blank"
            >
              GeoAdmin API
            </a>
          </li>
          <li>
            <a href="https://developers.google.com/maps/?hl=de" target="_blank">
              Google Maps API
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

TechnologienPage.displayName = 'TechnologienPage'

export default TechnologienPage
