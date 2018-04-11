import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import {amber500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import BtnNav from './components/BtnNav';
import Home from './components/HomePage/Home';
import Search from './components/SearchPage/Search';
import Cart from './components/CartPage/Cart';
import Profile from './components/ProfilePage/Profile';
import SignIn from './components/SignInPage/SignIn';
import SignUp from './components/SignUpPage/SignUp';
import NoMatch from './components/NoMatchPage/NoMatch';

class App extends Component {
  render() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: amber500,
      }
    });
    return (
      <Router>
        <div className="App">
          <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
            <img className="status_bar" src="images/Status-Bar.png" width="100%" alt="StatusBar" />
            <div className="Page">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/search" component={Search} />
                <Route path="/cart" component={Cart} />
                <Route path="/profile" component={Profile} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route component={NoMatch} />
              </Switch>
            </div>
            <BtnNav className="BtnNav" />
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
