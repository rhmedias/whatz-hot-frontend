import React, { Component } from 'react';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

class UserLayout extends Component {
	render() {
		return (
			<div>
				<Navbar />
                {this.props.children}
                <Footer/>
			</div>
		);
	}
}

export default UserLayout;
