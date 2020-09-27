import React, { Component } from 'react';
import Featured from '../components/home/Featured';
import Footer from '../components/home/Footer';
import HeroBox from '../components/home/Herobox';
import HomeBoxTwo from '../components/home/HomeBoxTwo';
import Navbar from '../components/home/Navbar';
import Trending from '../components/home/Trending';


class Home extends Component {
	
	render() {
		return (
			<div>
				<div>
					<Navbar/>
					<HeroBox/>
					<Featured/>
                    <HomeBoxTwo/>
                    <Trending/>
					<Footer/>
				</div>
			</div>
		);
	}
}

export default Home;
