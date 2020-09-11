import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ios from './../../assets/images/getApp/ios app button.png';
import android from './../../assets/images/getApp/android app button.png';


class Trending extends Component {
	render() {
		return (
			<div>
				<div className="container-div">
					
					<div className="hero-box">
						<h2>This is number 2</h2>
					</div>
					<div className="contact-us-box">
                    <h2>This is number 3</h2>
                        {/* <ul className="category-list">
							<Link to="#">
								<img src="" className="category-three" alt="contact-us-icon" />
								<li>Contact Us</li>
							</Link>
							<Link to="#">
								<img src='' className="category-three" alt="get-shop-icon" />
								<li>Get a Shop</li>
							</Link>
                            <Link to="#">
								<img src='' className="category-three" alt="return-policy-icon" />
								<li>Return Policy</li>
							</Link>
							
							
						</ul> */}
					</div>
					<div className="app-box">
						<h5>Get our App</h5>
                        <h6>To get access to more and exclusive offers</h6>
                        <Link to="#">
								<img src={ios} className="category-four" alt="return-policy-icon" />
								<img src={android} className="category-four" alt="return-policy-icon" />
							</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Trending;
