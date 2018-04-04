import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import { withRouter } from "react-router-dom";
import Paper from 'material-ui/Paper';

import IconHome from 'material-ui/svg-icons/action/home';
import IconSearch from 'material-ui/svg-icons/action/search';
import IconShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import IconPerson from 'material-ui/svg-icons/social/person';

import Home from "./NavPage/Home"

const HomeIcon = <IconHome />;
const searchIcon = <IconSearch />;
const shoppingIcon = <IconShoppingCart />;
const personIcon = <IconPerson />;


/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */

class BottomNavigationBar extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  onClick(even, index, path){
      this.select(index)
      this.props.history.push(path)
  }


  render() {  
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Home"
            icon={HomeIcon}
            onClick={(event) => { this.select(0); this.props.history.push("/");}}
          />
          <BottomNavigationItem
            label="Search"
            icon={searchIcon}
            onClick={(event) => { this.select(1); this.props.history.push("/search");}}
          />
          <BottomNavigationItem
            label="Cart"
            icon={shoppingIcon}
            onClick={(event) => { this.select(2); this.props.history.push("/cart");}}
          />
          <BottomNavigationItem
            label="Profile"
            icon={personIcon}
            onClick={(event) => { this.select(3); this.props.history.push("/profile");}}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default withRouter(BottomNavigationBar);