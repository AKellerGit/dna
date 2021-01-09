import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';

import About from './components/About'
import Apply from './components/Apply'
import Commercial from './components/Commercial'
import ContactDNA from './components/Contact'
import Residential from './components/Residential'
import ReportIssue from './components/Report'

import 'bulma';
import './App.css'
import './index.css';
import logo_hold from './logo_hold.png'
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://dnaconstructionfl.com">
          <img src={logo_hold} width="112" height="28"/>
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Link class="navbar-item" to="/">Home</Link>
          <Link class="navbar-item" to="/Commercial">Commercial</Link>
          <Link class="navbar-item" to="/Residential">Residential</Link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>
              <div class="navbar-dropdown">
                <Link class="navbar-item" to="/contact">Contact</Link>
                <Link class="navbar-item" to="/apply">Apply</Link>
                <Link class="navbar-item" to="/report">Report an issue</Link>
                <hr class="navbar-divider"/>
              </div>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/apply" component={Apply} />
      <Route path="/commercial" component={Commercial} />
      <Route path="/residential" component={Residential} />
      <Route path="/contact" component={ContactDNA} />
      <Route path="/report" component={ReportIssue} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
