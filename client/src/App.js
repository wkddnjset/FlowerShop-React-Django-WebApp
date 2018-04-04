import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Customers from './components/customers/customers.js';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from './components/AppBar';
import BtnNav from './components/BtnNav';

import Home from './components/NavPage/Home';
import Search from './components/NavPage/Search';
import Cart from './components/NavPage/Cart';
import Profile from './components/NavPage/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MuiThemeProvider>
            <AppBar />
            <div className="Content">
              <Route exact path="/" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/cart" component={Cart} />
              <Route path="/profile" component={Profile} />
            </div>
            <BtnNav className="BtnNav"/>
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
