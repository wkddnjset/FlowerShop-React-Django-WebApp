import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';

import IconSearch from 'material-ui/svg-icons/action/search';
import './SearchBar.css'


/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const SearchBar = () => (
  <AppBar
  	className="search_bar"
    title={<TextField className="search_input" hintText="검색"/>}
    iconElementLeft={<IconButton></IconButton>}
    iconElementRight={<IconButton className="search_btn"><IconSearch/></IconButton>}
  />
);

export default SearchBar;