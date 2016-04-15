import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';


export default class RegisterPage extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  
  handleClick(event) {
    event.preventDefault();
    axios.post('/register', {
      username: this.refs.username.value, 
      password: this.refs.password.value
    })
    .then(function(response){
      console.log(this.refs.username.value, this.refs.password.value)
    })
  }
  
  render() {
  return (
   <DocumentTitle title={`Sign Up`}>
     <div className="container">
     <div className="row">
     <div className="col-xs-12">
      <h3>Sign Up</h3>
      <hr />
      </div>
      <form>
        <input type = "email" placeholder="email"/>
        <input type="text" placeholder="username" ref = 'username'/>
        <input type="password" placeholder="password" ref = 'password'/>
        <input type="password" placeholder="validate password" ref = 'password'/>
        <button type ="submit" onClick={(e)=>this.handleClick(e)}>Sign Up</button>
      </form>
    </div>
    </div>
    </DocumentTitle>
  )}
}