import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import facebook from './../../assets/images/footer_icons/Icon metro-facebook.png';
import twitter from './../../assets/images/footer_icons/Icon awesome-twitter-square.png';
import linkedin from './../../assets/images/footer_icons/Icon awesome-linkedin.png';
import youtube from './../../assets/images/footer_icons/Icon metro-youtube.png';
import instagram from './../../assets/images/footer_icons/Icon metro-instagram.png';

class Footer extends Component {
	render() {
		return (
			<div className="footer_main">
				<div className="footer_">
					<MDBFooter color="blue" className="font-small pt-4 mt-4">
						<div className="footer">
							<MDBContainer fluid className="text-center text-md-left">
								<MDBRow>
									<MDBCol md="3">
										<h5 className="title">About</h5>
										<ul>
											<li className="list-unstyled">
												<a href="#!">About Whatzhot</a>
											</li>
											<li className="list-unstyled">
												<a href="#!">Carrers</a>
											</li>
											<li className="list-unstyled">
												<a href="#!">Contact Us</a>
											</li>
											<li className="list-unstyled">
												<a href="#!">Terms of Service</a>
											</li>
											<li className="list-unstyled">
												<a href="#!">Privacy Policy</a>
											</li>
											<li className="list-unstyled">
												<a href="#!">Press</a>
											</li>
										</ul>
									</MDBCol>
									<MDBCol md="3">
										<h5 className="title">Discover</h5>
										<ul>
											<li className="list-unstyled">
												<a href="#!">Blog</a>
											</li>
											<li className="list-unstyled">
												<a href="#!">Meet the Teams</a>
											</li>
											<li className="list-unstyled">
												<a href="#!">How it works</a>
											</li>
										</ul>
									</MDBCol>
									<MDBCol md="3">
										<h5 className="title">Businesses</h5>
										<ul>
											<li className="list-unstyled">
												<a href="#!">Register your business</a>
											</li>
											<li className="list-unstyled">
												<a href="#!">Business Support</a>
											</li>
											<li className="list-unstyled">
												<a href="#!">Advertise on Whatzhot</a>
											</li>
										</ul>
									</MDBCol>
									<MDBCol md="2">
										<h5 className="title">From Our Blog</h5>
										<ul>
											<li className="list-unstyled">
												<a href="#!">How i earned 2000 naira...</a>
											</li>
											<li className="list-unstyled">
												<a href="#!">How i earned 2000 naira...</a>
											</li>
											<li className="list-unstyled">
												<a href="#!">How i earned 2000 naira...</a>
											</li>
										</ul>
										<h5 className="title">Connect With Us</h5>
										<div className="row">
											<div class="column">
												<a href="#"><img src={facebook} alt="fb" /></a>
											</div>
											<div class="column">
												<a href="#"><img src={twitter} alt="twitter" /></a>
											</div>
											<div class="column">
												<a href="#"><img src={instagram} alt="instagram" /></a>
											</div>
											<div class="column">
												<a href="#"><img src={youtube} alt="youtube" /></a>
											</div>
											<div class="column">
												<a href="#"><img src={linkedin} alt="linkedin" /></a>
											</div>
										</div>
									</MDBCol>
								</MDBRow>
							</MDBContainer>
						</div>
						<div className="footer-copyright text-center py-3">
							<MDBContainer fluid>
								&copy; {new Date().getFullYear()} Copyright: <a href="#"> whatzhot.com </a>
							</MDBContainer>
						</div>
					</MDBFooter>
				</div>
			</div>
		);
	}
}

export default Footer;
