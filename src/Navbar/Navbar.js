import React from 'react';
import './Navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SwapDialog from './../SwapDialog/SwapDialog';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { }
  render() {

    return (
      <Router>
    <nav className="r-sticky-navbar">
      <ul className="r-list-inline">      
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
    <Switch>
    <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </Router>
    );
  }
}

function Home() {
  return (
    <div>
          <SwapDialog></SwapDialog>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>Rain Test Project</h2>
    </div>
  );
}

export default Navbar;
