import React from 'react';
import { Redirect } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

import OrderTab from './OrderTab'
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */


class ProfilePage extends React.Component {

	constructor(props) {
		super(props);
		this.data = this.props.location.state;
		this.history = this.props.history;
		this.state = {
			logged:false
	    };
		console.log(this.data);
	}
	componentWillMount() {
		if (this.data!=undefined){
			this.setState({logged: true});
		}
		else{	
			this.setState({logged: false});
		}
	}
 	
  	render() {
  		console.log(this.state.logged);
	    return (
	    <div className="profile_page">
        	{
        		!this.state.logged && <Redirect to="/signin"/>
        	}
            Profile
        	<RaisedButton 
	        	className="logout_btn"
	        	label="Logout" 
	        	primary={true} 
	        	fullWidth={true}
	        	onClick={() => this.history.push("/signin")}
	        />
	        <OrderTab/>
        </div>
    );
  }
}

export default ProfilePage;