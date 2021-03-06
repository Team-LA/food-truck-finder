import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

import Header from './Header';

export default class MasterPage extends React.Component {
	render() {
		return (
			<DocumentTitle title='Food Truck App'>
				<div className='MasterPage'>
					<Header />
					{ this.props.children }
				</div>
			</DocumentTitle>
		);
	}
}
