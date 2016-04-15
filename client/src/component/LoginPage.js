import React from 'react';
import DocumentTitle from 'react-document-title';
import {Link} from 'react-router';
import {axios} from 'axios'

export default class LoginPage extends React.Component {
constructor() {
  super()
  this.state = {
    username: '', password: ''
  }
}
handleClick(event){
/*event.preventDefault();
axios.post('/login', {*/
  // username: this.refs.username.value,
  // password: this.refs.password.value
// })
// .then(function(response){
//
// }
// )

console.log(this.refs.username.value, this.refs.password.value)
}

render() {
return (
<DocumentTitle title={`Login`}>
<div className="container">
<div className="row">
<div className="col-xs-12">
<h3>Login</h3>
<hr />
</div>

<form>
  <input type="text" placeholder="username" ref = 'username'/>
  <input type="password" placeholder="password" ref = 'password'/>
  <button type ="submit" onClick={(e)=>this.handleClick(e)}>Log In</button>
</form>
</div>
<p>No Account yet?<Link to="/register">Sign up</Link></p>
</div>
</DocumentTitle>
);
}
}