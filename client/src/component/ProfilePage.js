import React from 'react';
import DocumentTitle from 'react-document-title';

export default class ProfilePage extends React.Component {
  render() {
    return (
    <DocumentTitle title={`My Profile`}>
    
    <div className="container">
    <div className="row">
    <div className="col-xs-12">
      <h3>My Profile</h3>
      <hr />  
    </div>
    </div>
      
    <div className="row">
    <div className="col-xs-12">
    <button>Add Location<Link to="/profile/:settings"></Link></button>
    </div>
    </div>
    
    </div>
    </DocumentTitle>
  )}
}
