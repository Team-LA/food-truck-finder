import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

import Map from './Map';


export default class IndexPage extends React.Component {
  getTrucks() {
    console.log ('getting trucks')
  }
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Welcome!</h2>
        <div className="jumbotron">
        <button onClick={this.getTrucks}>Get Trucks!</button>

          <ol className="lead">
          <li><Map /></li>
          </ol>
        </div>
      </div>
    );
  }
}

