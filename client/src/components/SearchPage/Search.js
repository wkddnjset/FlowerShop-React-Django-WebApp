import React from 'react';
import SearchBar from './SearchBar';
import SearchList from './SearchList';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const SearchPage_Section = ({location}) => {
    return (
        <div className="search_page">
        <SearchBar/>
        <SearchList/>
        </div>
    );
};

class SearchPage extends React.Component {

	constructor(props) {
	  super(props);
	  this.token = this.props.location.state;
	  console.log(this.token);
	}

  	render() {
	    return (
	    <div>
		    <SearchPage_Section/>
	    </div>
    );
  }
}

export default SearchPage;