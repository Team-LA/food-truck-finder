import React from 'react';
import DocumentTitle from 'react-document-title';


export default class ProfileSetupPage extends React.Component {
  render() {
    var spToken = this.props.location.query.sptoken;
    return (
      <DocumentTitle title={`ProfileSetupPage`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Set Up Your Profile</h3>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
