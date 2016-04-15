import React from 'react';
import DocumentTitle from 'react-document-title';


export default class AddLocationView extends React.Component {
  render() {
    return (
      <DocumentTitle title={`Add Location`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Add Location</h3>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
