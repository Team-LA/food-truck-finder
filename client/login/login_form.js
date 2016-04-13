//input forms for username password
// var owner = {
// 	username: "",
// 	password: ""
// };

import React, { Component } from 'react';

class LoginForm extends Component{	
	constructor(props){
		super(props);

		this.state = {
			username: '',
			password: ''
		}
	}

	Submit: function(event){
		event.preventDefault();
		$.ajax({
			url: "/login",
			dataType: 'JSON',
			type: 'POST',
			data: {username: this.state.username, "password": this.state.password},
			success: function(data){
				console.log(data);
				//auth
				//redirect
			}.bind(this),
			error: function(err){
				console.log("Error: ", err);
			}.bind(this)
		});
	}

	render: function(){
		return (
			<form onSubmit={this.Submit}>
				<div className="input-group">
				  Username: <input value=this.state.username} type="text"><br> 
				  Password: <input value={this.state.password} type="password"><br>
				  <button> Submit </button>
				</div>
			</form>
		)
	}
}

export default LoginForm;