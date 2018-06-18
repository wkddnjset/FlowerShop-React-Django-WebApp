import React from 'react';
import { Redirect } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import './Profile.css'
import OrderTab from './OrderTab'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

const style = {
	height: 100,
	width: 100,
	margin: 20,
	textAlign: 'center',
	display: 'inline-block',
};

class ProfilePage extends React.Component {

	constructor(props) {
		super(props);
		this.data = this.props.location.state;
		this.history = this.props.history;
		this.state = {
			logged:false,
			open: false
	    };
		console.log(this.props);
	}
	componentWillMount() {
		if (this.data!==undefined){
			this.setState({logged: true});
		}
		else{	
			this.setState({logged: false});
		}
	}

	handleClose = () => {
		this.setState({open: false});
	};

	handleOpen = () => {
		this.setState({open: true});
	};

  	render() {
  		if (this.data){
  			console.log(this.state.logged);
			const actions = [
				<FlatButton
					label="취소"
					primary={true}
					onClick={this.handleClose}
				/>,
				<FlatButton
					label="확인"
					primary={true}
					onClick={() => this.history.push("/signin")}
				/>
			];
		    return (
		    <div className="profile_page">
	        	{
	        		!this.state.logged && <Redirect to="/signin"/>
	        	}
	            <div>
	            	<div>
					    <Paper style={style} zDepth={3} circle={true} />
				  	</div>
	            	<h2>{this.data.username}님</h2>
	            	<RaisedButton 
			        	className="logout_btn"
			        	label="Logout" 
			        	primary={true} 
			        	fullWidth={false}
			        	onClick={this.handleOpen}
			        	//onClick={() => this.history.push("/signin")}
		        	/>
		        	<Dialog
						title="알림 메세지"
						actions={actions}
						modal={false}
						open={this.state.open}
						onRequestClose={this.handleClose}
			        >
			        	확인버튼을 누르면 로그아웃 됩니다.
			        </Dialog>
	            </div>
	        	
		        <OrderTab/>
	        </div>
	        );
  		}
  		return (
	    <div className="profile_page">
        	{
        		!this.state.logged && <Redirect to="/signin"/>
        	}
        </div>
        );
  	}
}

export default ProfilePage;