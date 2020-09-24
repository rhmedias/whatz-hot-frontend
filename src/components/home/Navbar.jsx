import React, { Component } from 'react'
import Login from './../../pages/user/Login'
import { Link } from "react-router-dom";



class Navbar extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.menuRef = React.createRef();
	// }
	// toggleMenu = () => {
	// 	this.menuRef.current.classList.toggle('menu-show');
	// };
	render() {
		return (
			<div>
				<div className="first-top-nav" id="cNav">
					<div>
						<div className="logo-con">
							{/* Insert logo here */}
							{/* <Link to="/">
                            <img src={logo2} width="50px" />
                        </Link> */}
                    
						</div>

						<div className="top-menu" id="ref= this.menuRef">
							<ul className="top-nav">
                                <div className="logo_category">
                                <li>
									<a class="active" href="#category">
										Category
									</a>
								</li>
                                </div>
								<li>
									<a class="active" href="#write-review">
										Write a Review
									</a>
								</li>
								<li>
									<a href="#business-owner">Business Owner</a>
								</li>
								<li>
									<a href="#store">Store</a>
								</li>
								<li>
									<a href="#features">Featured</a>
								</li>

								<div className="login">
									

									<li>
									<Link to="/login">Login</Link>
										{/* <a href="/Login">Login</a> */}
									</li>
									<li>
									<Link to="/signup">Sign up</Link>
									</li>
								</div>
							</ul>
						</div>

						{/* <button className="menu-icon" onClick={this.toggleMenu}>
							<FontAwesomeIcon icon={faBars} />
						</button> */}
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;