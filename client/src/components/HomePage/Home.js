import React from 'react';

import Grid from './Grid';
import Grid2 from './Grid_2';
import Header from './Header';

import './Home.css'
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */


const HomePage_Section = ({history}) => {
    return (
        <div className="home_page">
        	<img src="images/home_header.png" width="100%" alt=""/>
        	<Header/>
            <Grid/>
            <Grid2/>
        </div>
    );
};


class HomePage extends React.Component {

	constructor(props) {
	  super(props);
	  this.data = this.props.location.state;
	  console.log(this.data);
	}

  	render() {
	    return (
	    <div>
		    <HomePage_Section/>
	    </div>
    );
  }
}

export default HomePage;