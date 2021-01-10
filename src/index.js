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
import Footer from './components/Footer'

import 'bulma';
import './App.css'
import './index.css';

import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="http://dnaconstructionfl.com">
          <img src='/logo_hold.png' width="112" height="28"/>
        </a>
        <a role="button" data-target="navMenu" className="navbar-burger burger is-active" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navMenu" className="navbar-menu is-active">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/Commercial">Commercial</Link>
          <Link className="navbar-item" to="/Residential">Residential</Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/contact">Contact</Link>
                <Link className="navbar-item" to="/apply">Apply</Link>
                <Link className="navbar-item" to="/report">Report an issue</Link>
                <hr className="navbar-divider"/>
              </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">
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
    <Footer/>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

// Check if there are any navbar burgers
if ($navbarBurgers.length > 0) {
  // Add a click event on each of them
  $navbarBurgers.forEach( el => {

    // Bulma Hamburger is defaulted to open initially. this will render closed.
    // repetitive, a better solution should be sought.
    const target = el.dataset.target;
    const $target = document.getElementById(target);
    el.classList.toggle('is-active');
    $target.classList.toggle('is-active');

    el.addEventListener('click', () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });
}

});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
