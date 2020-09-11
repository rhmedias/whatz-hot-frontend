import React, { Component } from 'react';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import HeroBox from '../home/Herobox';

class MainLayout extends Component {
	render() {
		return (
			<div>
				<Navbar />
                <HeroBox/>
                {this.props.children}
                <Footer/>
			</div>
		);
	}
}

export default MainLayout;
