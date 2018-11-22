import React, { Component } from 'react';
import { Router, Link } from "@reach/router";
import Home from './components/Home';
import Reviews from './components/Reviews';
import './App.css';
// TODO: Add reviews component to route to from this module

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="pageTitle"><Link to="/">northwestgreens</Link></h1>
          <h3 className="pageSubTitle">The World's Most Trusted Cannabis Opinion</h3>
        </header>
        <Router>
          <Home path="/" />
          <Reviews path="/reviews" />
          {/* TODO: Add review component here going to path="/reviews" with each individual item at path="/reviews/:id" */}
        </Router>
      </div>
    );
  }
}

export default App;
