import React, { Component } from 'react';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';

class MainLayout extends Component {
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

export default MainLayout;
