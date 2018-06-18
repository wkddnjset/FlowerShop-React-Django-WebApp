import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';

import MobileTearSheet from '../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { darkBlack } from 'material-ui/styles/colors';

import IconSearch from 'material-ui/svg-icons/action/search';
import './SearchBar.css'


/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */


class SearchBar extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {
	      keyword:"",
	      searchData:[],
	    };
	}
	keyword_handleChange = (event) => {
	    this.setState({
	      keyword: event.target.value,
	    });
	    console.log(event.target.value)
	}
	render() {
		return (
			<MobileTearSheet>
			  	<AppBar
			  		className="search_bar"
			    	title={
				    	<TextField 
				    		className="search_input" 
				    		hintText="검색"
				    		value={this.state.keyword}
		          			onChange={this.keyword_handleChange}
				    	/>}
				    iconElementLeft={<IconButton></IconButton>}
				    iconElementRight={<IconButton className="search_btn"><IconSearch/></IconButton>}
			  	/>
			  	
					<List>
		  			<ListItem
			          	className="search_list"
			          	leftAvatar={<img src="images/flower/flower_01.jpg" alt=""/>}
			          	primaryText="Brunch this weekend?"
			          	secondaryText={
		    			<p>
		      				<span style={{color: darkBlack}}>Brendan Lim</span> --
		      				I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
		    				</p>
		  				}
		  				secondaryTextLines={2}
					/>
					<Divider inset={true} />
				</List>
        	</MobileTearSheet>
		);
	}
}

export default SearchBar;