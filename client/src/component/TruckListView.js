import React from 'react';
import DocumentTitle from 'react-document-title';


export default class TruckListView extends React.Component {
  render() {
    return (
      <DocumentTitle title={`Food Truck Results`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Truck List</h3>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
