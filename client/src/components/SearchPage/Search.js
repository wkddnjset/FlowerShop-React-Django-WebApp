import React from 'react';
import SearchBar from './SearchBar';
import SearchList from './SearchList';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

class SearchPage extends React.Component {

	constructor(props) {
	  super(props);
	  this.token = this.props.location.state;
	  console.log(this.token);
	  console.log(this.props);
	}

  	render() {
	    return (
	    <div>
		    <div className="search_page">
	        	<SearchBar/>
	        </div>
	    </div>
    );
  }
}

export default SearchPage;