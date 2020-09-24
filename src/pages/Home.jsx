import React, { Component } from 'react';
import Featured from '../components/home/Featured';
import HeroBox from '../components/home/Herobox';
import HomeBoxTwo from '../components/home/HomeBoxTwo';
import Trending from '../components/home/Trending';


class Home extends Component {
	
	render() {
		return (
			<div>
				<div>
					<HeroBox/>
					<Featured/>
                    <HomeBoxTwo/>
                    <Trending/>
				</div>
			</div>
		);
	}
}

export default Home;
