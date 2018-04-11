import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import FlatButton from 'material-ui/FlatButton';

class SignInForm extends Component {

	constructor(props) {
	  super(props);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.username_handleChange = this.username_handleChange.bind(this);
	  this.password_handleChange = this.password_handleChange.bind(this);
	  this.state = {
	      username:"",
	      password:"",
	      // 팝업 여부
	      open: false,
	      //팝업 에러 메세지에 대한 내용
	      message:"",
	    };
	}

	// Input 태그 값 불러오기
	username_handleChange = (event) => {
	    this.setState({
	      username: event.target.value,
	    });
	}
	password_handleChange = (event) => {
	    this.setState({
	      password: event.target.value,
	    });
	}

  	handleClose = () => {
		this.setState({open: false});
	};

	handleSubmit(event){
		event.preventDefault();

		axios.post('/api/token/?format=json', {
			username:event.target.username.value, 
			password:event.target.password.value
		})
		.then(response => {
			this.setState({open: false});
			console.log(response.data);
			this.props.history.push({
				pathname: '/',
				state:response.data.token
			});
		})
		.catch(error => {
			const res_username = error.response.data.username;
			const res_password = error.response.data.password;
			if (res_username!==undefined && res_password!==undefined){
				//alert("아이디와 패스워드를 입력해주세요.");
				this.setState({message: "아이디와 패스워드를 입력해주세요."});
				this.setState({open: true});
			}
			else if (res_username!==undefined){
				//alert("아이디를 입력해주세요.");
				this.setState({message: "아이디를 입력해주세요."});	
				this.setState({open: true});
			}
			else if (res_password!==undefined){
				// alert("비밀번호를 입력해주세요.");
				this.setState({message: "비밀번호를 입력해주세요."});	
				this.setState({open: true});
			}
			else{
				// alert("아이디/비밀번호가 일치하지 않습니다.");
				this.setState({message: "아이디/비밀번호가 일치하지 않습니다."});	
				this.setState({open: true});
			}
		})
	}

  	render() {
  		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onClick={this.handleClose}
			/>
		];
	    return (
	    	<form onSubmit={this.handleSubmit}>
		      	<TextField
					hintText="아이디를 입력해주세요."
					floatingLabelText="아이디"
					name="username"
					value={this.state.username}
          			onChange={this.username_handleChange}
			    /><br />
			    <TextField
					hintText="비밀번호를 입력해주세요."
					floatingLabelText="비밀번호"
					type="password"
					name="password"
					value={this.state.password}
          			onChange={this.password_handleChange}
			    /><br />
			    <RaisedButton 
	            	className="signin_btn"
	            	label="Login" 
	            	primary={true} 
	            	fullWidth={true}
	                type="Submit"
	            />
	            <Dialog
					title="알림 메세지"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
		        >
					{this.state.message}
		        </Dialog>
		    </form>
    );
  }
}

export default withRouter(SignInForm);